# Infrastructure tests

## DNS Resolution (`test_dns_resolves`)

- **Pass:** `socket.getaddrinfo(host, ...)` succeeds for URL host.

## WWW Redirect Behavior (`test_www_redirect`)

- **Logic:** Compare apex vs `www.` same path; both fetched with redirects **disabled**.
- **Pass:** At least one returns **301/302/307/308** (canonical host redirect).
- **Skip:** Request exceptions — "Could not compare hosts".
- **Fail:** Neither side redirects — expects one canonicalization pattern.

## Server Header Info Exposure (`test_server_header_info`)

- **Pass:** No `Server` header **or** header does **not** contain version pattern `\d+\.\d+`.
- **Fail:** e.g. `nginx/1.18.0` style leakage.

## X-Powered-By Header Hidden (`test_x_powered_by_hidden`)

- **Pass:** Response must **not** include `X-Powered-By` header.

## Content-Type Header (`test_content_type_header`)

- **Pass:** `Content-Type` includes **`text/html`** for main document.

---

[Back to test catalog](../test-catalog.md)
