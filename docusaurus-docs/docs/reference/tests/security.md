# Security tests

## HTTPS Enforcement (`test_https_enforced`)

- **Skip:** Base URL `http://` → "Base URL is not HTTPS".
- **Skip:** HTTP endpoint unreachable.
- **Pass:** HTTP URL returns **301/302/307/308** and `Location` starts with `https://`.

## SSL Certificate Validity (`test_ssl_certificate_valid`)

- **Skip:** Not HTTPS.
- **Skip:** `TRON_QA_INSECURE_SSL` / verify disabled — peer cert dict unavailable path.
- **Pass:** TLS handshake returns peer certificate (verified context).

## SSL Certificate Expiry (`test_ssl_certificate_expiry`)

- **Skip:** Not HTTPS or insecure SSL mode as above.
- **Pass:** Certificate `notAfter` **more than 30 days** ahead.

## Security Headers (`test_security_headers`)

- **Pass:** Response headers include **lowercase keys** check for:
  - `x-frame-options`
  - `x-content-type-options`
  - `content-security-policy` **or** `content-security-policy-report-only`
- **Fail:** Any missing.

## HSTS Header Present (`test_hsts_header`)

- **Skip:** Not HTTPS.
- **Pass:** `Strict-Transport-Security` present.

## CORS Policy Check (`test_cors_policy`)

- **Pass:** No `Access-Control-Allow-Origin` **or** value is not bare `*`.
- **Fail:** `*` on main document response (wildcard CORS).

## Sensitive Files Exposure (`test_sensitive_files_exposed`)

- **Paths tried:** `/.env`, `/config.php`, `/.git/config`
- **Pass:** None return **200** or **301/302** (redirect to sensitive).
- **Fail:** Exposed sensitive paths.

## Directory Listing Disabled (`test_directory_listing`)

- **Pass:** Body does not look like Apache-style directory index (`index of /`, `<title>index of`).

## Cookie Security Flags (`test_cookie_security`)

- **Pass:** No `Set-Cookie` **or** cookie string contains both `secure` and `httponly` (case-insensitive).
- **Fail:** Cookies set without those flags.

## Mixed Content (`test_mixed_content`)

- **Skip:** Not HTTPS.
- **Pass:** No `script`/`img`/`link`/`iframe` with `http://` absolute URL on HTTPS page.
- **Fail:** Any mixed content resource found.

---

[Back to test catalog](../test-catalog.md)
