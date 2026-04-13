# Links & assets tests

## Internal Links Reachable (`test_internal_links`)

- **Logic:** Up to **25** same-origin links from `<a href>`; each checked with HEAD (fallback GET if 405).
- **Pass:** Each status **&lt; 400**; at least **one** internal link verified.
- **Fail:** Broken internal link or no internal links to check.

## External Links Sample (`test_external_links_sample`)

- **Logic:** Up to **5** unique external `http(s)` links.
- **Pass:** If none → test **passes** (nothing to do).
- **Pass:** For each: HEAD/GET — **not** 404 (network errors **ignored** / swallowed).

## Image Sources Reachable (`test_image_sources`)

- **Pass:** Every `<img src>` resolvable URL returns **&lt; 400**.

## CSS Files Reachable (`test_css_sources`)

- **Pass:** Every `link[rel~=stylesheet]` `href` → GET **&lt; 400**.

## JavaScript Files Reachable (`test_js_sources`)

- **Pass:** Every `script[src]` → GET **&lt; 400**.

## Favicon Present (`test_favicon_exists`)

- **Pass:** `GET /favicon.ico` → **200** and non-empty body.

---

[Back to test catalog](../test-catalog.md)
