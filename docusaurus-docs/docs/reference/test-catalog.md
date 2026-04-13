# Test catalog overview

Each automated check is a pytest `test_*` function. The UI **display name** comes from `tron_engine.TEST_NAMES`.

## Categories

| Category | Marker | Page |
|----------|--------|------|
| Performance | `@pytest.mark.performance` | [Performance tests](tests/performance.md) |
| Security | `@pytest.mark.security` | [Security tests](tests/security.md) |
| SEO | `@pytest.mark.seo` | [SEO tests](tests/seo.md) |
| Accessibility | `@pytest.mark.accessibility` | [Accessibility tests](tests/accessibility.md) |
| Links & assets | `@pytest.mark.links` | [Links tests](tests/links.md) |
| Content | `@pytest.mark.content` | [Content tests](tests/content.md) |
| Mobile | `@pytest.mark.mobile` | [Mobile tests](tests/mobile.md) |
| Infrastructure | `@pytest.mark.infrastructure` | [Infrastructure tests](tests/infrastructure.md) |

## Full list (internal name → display name)

1. `test_page_load_time` — Page Load Time  
2. `test_time_to_first_byte` — Time to First Byte (TTFB)  
3. `test_response_size` — Response Size Check  
4. `test_compression_enabled` — Compression Enabled (gzip/brotli)  
5. `test_cache_headers` — Cache-Control Headers  
6. `test_https_enforced` — HTTPS Enforcement  
7. `test_ssl_certificate_valid` — SSL Certificate Validity  
8. `test_ssl_certificate_expiry` — SSL Certificate Expiry (30d)  
9. `test_security_headers` — Security Headers (X-Frame, CSP)  
10. `test_hsts_header` — HSTS Header Present  
11. `test_cors_policy` — CORS Policy Check  
12. `test_sensitive_files_exposed` — Sensitive Files Exposure  
13. `test_directory_listing` — Directory Listing Disabled  
14. `test_cookie_security` — Cookie Security Flags  
15. `test_mixed_content` — Mixed Content (HTTP on HTTPS)  
16. `test_meta_title` — Meta Title Tag  
17. `test_meta_description` — Meta Description Tag  
18. `test_meta_viewport` — Meta Viewport Tag  
19. `test_canonical_url` — Canonical URL Tag  
20. `test_robots_txt` — robots.txt Present  
21. `test_sitemap_xml` — sitemap.xml Present  
22. `test_open_graph_tags` — Open Graph Tags  
23. `test_heading_structure` — Heading Structure (H1)  
24. `test_image_alt_tags` — Image Alt Attributes  
25. `test_structured_data` — Structured Data (JSON-LD)  
26. `test_lang_attribute` — HTML Lang Attribute  
27. `test_form_labels` — Form Input Labels  
28. `test_button_text` — Button Accessible Text  
29. `test_link_text` — Link Descriptive Text  
30. `test_color_contrast_basic` — Color Contrast Basic Check  
31. `test_skip_navigation` — Skip Navigation Link  
32. `test_aria_landmarks` — ARIA Landmarks (main/nav/header)  
33. `test_internal_links` — Internal Links Reachable  
34. `test_external_links_sample` — External Links Sample Check  
35. `test_image_sources` — Image Sources Reachable  
36. `test_css_sources` — CSS Files Reachable  
37. `test_js_sources` — JavaScript Files Reachable  
38. `test_favicon_exists` — Favicon Present  
39. `test_no_lorem_ipsum` — No Placeholder Text  
40. `test_no_broken_html` — Well-Formed HTML  
41. `test_404_page_exists` — Custom 404 Page  
42. `test_page_encoding` — UTF-8 Charset Declared  
43. `test_no_console_errors` — No JavaScript Console Errors  
44. `test_viewport_meta` — Viewport Meta Tag  
45. `test_touch_icons` — Apple Touch Icon  
46. `test_mobile_rendering` — Mobile Rendering (375px)  
47. `test_dns_resolves` — DNS Resolution  
48. `test_www_redirect` — WWW Redirect Behavior  
49. `test_server_header_info` — Server Header Info Exposure  
50. `test_x_powered_by_hidden` — X-Powered-By Header Hidden  
51. `test_content_type_header` — Content-Type Header  

:::tip Source of truth
Thresholds and exact assertions are defined in **`pyengine/tron_engine.py`**. This catalog explains behavior; the code is authoritative.
:::
