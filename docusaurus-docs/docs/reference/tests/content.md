# Content tests

## No Placeholder Text (`test_no_lorem_ipsum`)

- **Pass:** Response body (lowercase) does not contain substring `lorem ipsum`.

## Well-Formed HTML (`test_no_broken_html`)

- **Logic:** Custom `HTMLParser` stack — first **500k** chars; detects unexpected end tags / mismatch.
- **Pass:** No balance errors in sample.

## Custom 404 Page (`test_404_page_exists`)

- **Logic:** GET non-existent path `.../tron-qa-nonexistent-404-check-xyz` with **no redirects**.
- **Pass:** Status **404** and body length **&gt; 20** chars.
- **Fail:** Soft 404 (200), redirects to home, tiny body.

## UTF-8 Charset Declared (`test_page_encoding`)

- **Pass:** `Content-Type` contains `utf-8` **or** HTML has charset meta / utf-8 in meta http-equiv.

## No JavaScript Console Errors (`test_no_console_errors`)

- **Requires:** **Selenium** + Chrome (`selenium_driver` fixture).
- **Skip:** Chrome/driver unavailable — **WARNING** in UI.
- **Timeout:** pytest **120s** marker.
- **Pass:** After load + 1s sleep, browser log has **no SEVERE** entries except ignored `network` source.
- **Fail:** JS errors in console.

---

[Back to test catalog](../test-catalog.md)
