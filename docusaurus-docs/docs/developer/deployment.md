# Hosting this documentation

The MkDocs build outputs **static HTML** under `documentation/site/`. You can ship that folder to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).

**Build command (from repo root):**

```bash
pip install -r documentation/requirements.txt
mkdocs build -f documentation/mkdocs.yml
```

---

## Option A — Same project as `tronq.vercel.app` under `/docs`

Use this when your marketing site and the TRON app repo live in **one Vercel project** and you want docs at `https://tronq.vercel.app/docs/`.

### 1. Put the built site under `/docs` in that project

After `mkdocs build`, copy the **contents** of `documentation/site/` into your Vercel repo’s `public/docs/` folder (or `docs/` at the root, depending on your framework).

Example for a **Vite / plain static** Vercel app:

- Build MkDocs in the **TronUI-RN** repo.
- Copy `documentation/site/*` → `tronq-site/public/docs/` (adjust folder names to match your marketing repo).

### 2. Client-side routing

MkDocs generates **directory indexes** (`index.html` per folder). Vercel serves `/docs/` → `/docs/index.html` by default. Deep links like `/docs/reference/glossary/` should resolve if each folder has `index.html` (MkDocs does this).

If you use a SPA fallback (`/* → /index.html`) for the marketing site, **exclude** `/docs/*` from that rewrite so static files under `/docs` are served as files, not the SPA shell.

**`vercel.json` example (conceptual):**

```json
{
  "rewrites": [
    { "source": "/docs/:path*", "destination": "/docs/:path*" }
  ]
}
```

Or rely on Vercel static file priority: files in `public/docs` win over SPA fallback if configured correctly. Test `/docs/` and one nested page after deploy.

### 3. Monorepo / two folders in one Vercel project

If **marketing** is repo A and **TronUI-RN** is repo B:

- **CI:** On release, clone both (or use submodule), run `mkdocs build` in TronUI-RN, copy `site/` into A’s `public/docs`, then `vercel build` for A.
- **Manual:** Build locally, copy `documentation/site/` into the marketing repo, commit, deploy.

### 4. `site_url` in `mkdocs.yml`

`documentation/mkdocs.yml` sets `site_url: https://tronq.vercel.app/docs/` so internal links and search can use the correct base. If your final URL differs, update `site_url` before building.

---

## Option B — Separate deployment + link from marketing

Use a **second Vercel project** (or Netlify / GitHub Pages) only for docs.

### Steps

1. Create a new Vercel project.
2. Connect the **TronUI-RN** repo (or a small repo that only contains built HTML).
3. **Build command:**  
   `pip install -r documentation/requirements.txt && mkdocs build -f documentation/mkdocs.yml`
4. **Output directory:** `documentation/site`
5. **Install command:** leave default or `pip install -r documentation/requirements.txt` if Vercel uses a Python environment — or use a **GitHub Action** that builds and pushes only `site/` to a branch Vercel serves.

### Custom subdomain

Example: `docs.tronq.vercel.app` or `tron-docs.vercel.app`.

1. In Vercel → Project → Domains → add subdomain.
2. In DNS (your provider), add the record Vercel shows (CNAME / A).
3. Set `site_url` in `mkdocs.yml` to that origin, rebuild.

### Link from `tronq.vercel.app`

Add a nav link: **Documentation** → `https://your-docs-host/` (your Help menu in the Electron app can point here too).

---

## Optional: GitHub Actions → Vercel

A common pattern:

- Workflow on `push` to `main`: install Python deps, `mkdocs build`, upload `documentation/site` as artifact or deploy with Vercel CLI (`vercel deploy documentation/site --prod`).

This keeps the marketing repo clean and always ships docs from the same commit as the code.

---

## Checklist before going live

- [ ] `mkdocs build` completes with no errors.
- [ ] Open homepage and a **nested** page (e.g. Reference → Security tests).
- [ ] Search works (Material’s built-in search).
- [ ] Logo and favicon load (`assets/tron-window.png`, `assets/favicon.ico`).
- [ ] Update `site_url` if the public URL changed.
