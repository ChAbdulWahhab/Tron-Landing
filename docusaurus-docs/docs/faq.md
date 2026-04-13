# FAQ

## What does TRON do?

It runs automated checks against a **URL** you provide: speed, security headers, SSL, SEO meta tags, accessibility heuristics, broken links and assets, content quality, mobile viewport, and infrastructure headers.

## PASSED vs WARNING?

**PASSED** — the test ran and passed. **WARNING** — pytest **skipped** the test (preconditions not met). Skipped is **not** a success; it is also not a hard **FAILED**.

## Why is the score not 100% when everything “looks fine”?

**WARNING** rows may be in the total, but the score numerator is usually **PASSED** only — or some tests **FAILED**. Check the separate counters in the UI.

## Why do security header tests fail?

TRON expects **X-Frame-Options**, **X-Content-Type-Options**, and **CSP** (or CSP-Report-Only) on the **HTML document** response. Add them at your CDN or origin.

## Can I test an HTTP site?

Yes, but **HTTPS enforcement**, **HSTS**, **mixed content**, and some SSL tests will **skip** (shown as **WARNING**).

## Is Chrome required?

**Console errors** and **mobile rendering** use **Selenium + Chrome**. Without Chrome, those tests may **skip**.

## Does TRON replace manual QA?

No. TRON gives a **fast, repeatable smoke** pass. It does not replace full **WCAG** audits, business logic testing, or authenticated flows.

## Does data go to the cloud?

By default the engine calls **your target URL** from **your machine**. The **update check** is a separate HTTPS request. Reports stay local unless **you** integrate something else.

## Why did old reports disappear?

A new **install identity** (`.tron_install_uid`) can wipe stale data — see [Privacy & data](operations/privacy-and-data.md).

## Why is the suite slow?

Many HTTP checks plus **120s** timeouts on some Selenium tests — slow sites take longer.

## User-Agent blocked?

TRON uses `TronQA/2.0`. If a WAF blocks it, allowlist the agent or expect failures.

## SPA (React/Vue) SEO failures?

If the first HTML is a shell without meta tags or H1, use **SSR** or server-injected meta — otherwise SEO-related tests fail.

## Why does the custom 404 test fail?

TRON requests a fixed path ending in `tron-qa-nonexistent-404-check-xyz` and expects HTTP **404** **without** redirecting to the home page. Sites that always redirect unknown URLs will fail this check.

## How do I build or serve these docs?

```bash
pip install -r documentation/requirements.txt
mkdocs serve -f documentation/mkdocs.yml
```

For production hosting, see [Hosting documentation](developer/deployment.md).

## More questions?

Use **Help → Report a Bug** in the app or your project’s issue tracker.
