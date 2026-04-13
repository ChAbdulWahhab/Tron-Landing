# Mobile tests

## Viewport Meta Tag (`test_viewport_meta`)

- **Pass:** Viewport meta exists and `content` includes **`width`** (lowercase check).

## Apple Touch Icon (`test_touch_icons`)

- **Pass:** `<link rel="...apple-touch-icon...">` exists.

## Mobile Rendering (`test_mobile_rendering`)

- **Requires:** Selenium + Chrome.
- **Skip:** Driver missing.
- **Timeout:** 120s.
- **Logic:** Window **375×812**; measure `max(document.body.scrollWidth, document.documentElement.scrollWidth)`.
- **Pass:** Width **≤ 395** (375 + 20 tolerance) — no horizontal overflow.

---

[Back to test catalog](../test-catalog.md)
