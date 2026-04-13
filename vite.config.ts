import fs from "node:fs"
import path from "path"
import { defineConfig, type Plugin } from "vite"

function stripQuery(url: string): string {
  const i = url.indexOf("?")
  return i === -1 ? url : url.slice(0, i)
}

/**
 * Dev-only: Vite only serves `public/` URLs that appear in its scanned `publicFiles` set.
 * MkDocs uses directory URLs (`/docs/`, `/docs/foo/`) which are not in that set, so the SPA
 * html fallback rewrites them to `/index.html` and React Router shows a black screen.
 * Map those requests to the real `.../index.html` files under `public/docs/`.
 */
function publicDocsRewritePlugin(): Plugin {
  return {
    name: "tron-public-docs-paths",
    enforce: "post",
    configureServer(server) {
      const docsRoot = path.join(server.config.publicDir, "docs")
      server.middlewares.use((req, _res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") return next()
        const full = req.url
        if (!full?.startsWith("/docs")) return next()

        let pathname = stripQuery(full)
        try {
          pathname = decodeURIComponent(pathname)
        } catch {
          return next()
        }

        const qs = full.includes("?") ? full.slice(full.indexOf("?")) : ""
        const inner = pathname
          .slice("/docs".length)
          .replace(/^\/+/, "")
          .replace(/\/+$/, "")
        const segments = inner ? inner.split("/").filter(Boolean) : []
        const diskPath = segments.length ? path.join(docsRoot, ...segments) : docsRoot

        if (fs.existsSync(diskPath) && fs.statSync(diskPath).isFile()) {
          return next()
        }

        const indexHtml = path.join(diskPath, "index.html")
        if (fs.existsSync(indexHtml) && fs.statSync(indexHtml).isFile()) {
          // Force trailing slash for directory requests so relative links work
          if (!pathname.endsWith("/")) {
            _res.statusCode = 301
            _res.setHeader("Location", `${pathname}/${qs}`)
            _res.end()
            return
          }

          const rel = segments.length ? `${segments.join("/")}/index.html` : "index.html"
          req.url = `/docs/${rel}${qs}`
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [publicDocsRewritePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})