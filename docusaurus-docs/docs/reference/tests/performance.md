# Performance tests

HTTP timeout default **10s** unless noted.

## Page Load Time (`test_page_load_time`)

- **Pass:** Full GET completes; `status_code < 500`; wall time **&lt; 3.0s**.
- **Fail:** Slow server, timeouts, 5xx.
- **Skip:** N/A (runs for valid URL).

## Time to First Byte (`test_time_to_first_byte`)

- **Pass:** Streamed read (first chunk) TTFB **&lt; 0.6s** (600ms).
- **Fail:** Slow backend, buffering issues.

## Response Size Check (`test_response_size`)

- **Pass:** Response body **&lt; 5 MB**.
- **Fail:** Huge HTML/assets inlined.

## Compression Enabled (`test_compression_enabled`)

- **Pass:** Raw HTTP GET with `Accept-Encoding: gzip, deflate, br` — response `Content-Encoding` contains `gzip`, `br`, or `deflate`.
- **Fail:** Origin sends uncompressed without encoding header.

## Cache-Control Headers (`test_cache_headers`)

- **Pass:** Response has `Cache-Control` **or** `Expires`.
- **Fail:** No caching hints (may be intentional for dynamic pages — policy decision).

---

[Back to test catalog](../test-catalog.md)
