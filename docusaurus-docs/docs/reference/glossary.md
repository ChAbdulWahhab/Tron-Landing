# Glossary

| Term | Definition |
|------|------------|
| **Archives** | Past runs stored in SQLite (or JSON fallback): URL, score, full `results_json`. |
| **base_url** | Pytest session fixture — final URL under test (`TRON_SUITE_URL` takes priority). |
| **Headless** | Chrome runs without a visible window (`TRON_HEADLESS=1`). |
| **HSTS** | HTTP Strict Transport Security — tells browsers to use HTTPS. |
| **CSP** | Content Security Policy — reduces XSS risk. |
| **TTFB** | Time to First Byte — time until the first response byte arrives. |
| **Mixed content** | Loading `http://` resources on an `https://` page. |
| **userData** | Electron app-specific writable directory (OS-dependent). |
| **WARNING (UI)** | Pytest **skipped** the test — not counted as passed. |
| **tron_engine** | PyInstaller executable or `tron_engine.py` — runs pytest. |
| **JSON-LD** | Structured data in `<script type="application/ld+json">`. |
| **Soft 404** | HTTP 200 with “not found” content — TRON’s 404 test expects a real **404** status. |

---

See also [Test catalog](test-catalog.md) and [FAQ](../faq.md).
