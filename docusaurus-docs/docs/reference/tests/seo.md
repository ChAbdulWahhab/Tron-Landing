# SEO tests

These tests **GET** the page and parse HTML (BeautifulSoup) unless noted otherwise.

## Meta Title Tag (`test_meta_title`)

- **Pass:** `<title>` exists, non-empty text, length **10–60** characters (stripped).

## Meta Description Tag (`test_meta_description`)

- **Pass:** `<meta name="description" content="...">` with content length **50–160** chars.

## Meta Viewport Tag (`test_meta_viewport`)

- **Pass:** `<meta name="viewport" ...>` present.

## Canonical URL Tag (`test_canonical_url`)

- **Pass:** `<link rel="...canonical...">` with `href`.

## robots.txt Present (`test_robots_txt`)

- **Pass:** `GET /robots.txt` → **200** and non-empty body.

## sitemap.xml Present (`test_sitemap_xml`)

- **Pass:** `GET /sitemap.xml` → **200** and body contains `<urlset` or `<sitemapindex` (case-insensitive text check).

## Open Graph Tags (`test_open_graph_tags`)

- **Pass:** `meta[property]` map includes `og:title`, `og:description`, `og:image` (non-empty content).

## Heading Structure (`test_heading_structure`)

- **Pass:** Exactly **one** `<h1>`.

## Image Alt Attributes (`test_image_alt_tags`)

- **Pass:** Every `<img>` has **`alt` attribute** (value can be empty for decorative — engine still requires attribute presence).

## Structured Data (`test_structured_data`)

- **Pass:** Raw HTML contains `application/ld+json` **or** `itemscope` (microdata).

---

[Back to test catalog](../test-catalog.md)
