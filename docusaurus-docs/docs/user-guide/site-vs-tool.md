# Site vs tool (triage)

When a test is **FAILED** or **WARNING**, decide whether the problem is the **website / deployment** or the **TRON environment**.

## FAILED — usually the site

| Signal | Common cause |
|--------|----------------|
| Page load / TTFB | Slow server, cold start, heavy page, network |
| Security headers | Missing `X-Frame-Options`, `X-Content-Type-Options`, CSP |
| HSTS | Missing `Strict-Transport-Security` on HTTPS |
| SEO / meta | Title length, description, canonical, robots, sitemap, OG tags |
| Mixed content | `http://` assets on an HTTPS page |
| Links / assets | 404 on CSS/JS/images, broken internal links |
| Accessibility | Missing `lang`, unlabeled inputs, generic link text |
| Content | `lorem ipsum`, broken HTML balance, wrong 404 behavior |
| Mobile | Viewport, touch icon, horizontal overflow at 375px width |
| Infrastructure | `Server` header exposes version, `X-Powered-By`, wrong `Content-Type` |

Per-test detail: [Test catalog](../reference/test-catalog.md) and the category pages.

## WARNING (skipped) — often “not applicable” or policy

| Situation | Example |
|-----------|---------|
| HTTP URL | HTTPS-only tests skip |
| `TRON_QA_INSECURE_SSL=1` | Certificate validity/expiry tests skip by design |
| Chrome / driver missing | Selenium tests skip → WARNING message |
| HTTP endpoint unreachable | e.g. `test_https_enforced` skip |

## ERROR — tool / machine

| Situation | Example |
|-----------|---------|
| Python / deps | Import errors, missing packages |
| Engine missing | Bad install, wrong `pyengine` path |
| Permissions | Cannot write `results.json` or userData |

## Edge cases

- **CDN / WAF** may change headers; a failure still reflects what TRON observed.
- **SPAs:** First HTML may be minimal — SEO and a11y tests use the **initial** response. SSR vs client-only rendering can cause false signals; document that in your internal policy.

## Next steps

1. Read the **message** text (exact assertion or skip reason).
2. Match the test to **pass criteria** in the [test reference](../reference/test-catalog.md).
3. Verify with browser DevTools or `curl` for headers and status codes.
