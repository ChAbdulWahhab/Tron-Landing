# Security & SSL

## Default TLS behavior

- With normal (secure) QA, `requests` verifies certificates using the **certifi** CA bundle.
- **`TRON_QA_INSECURE_SSL`** set to `1`, `true`, or `yes`:
  - Relaxes TLS verification (labs, custom MITM, some corporate proxies).
  - Suppresses urllib3 insecure warnings.
  - **`test_ssl_certificate_valid`** and **`test_ssl_certificate_expiry`** are **skipped** when verification is disabled (see engine code).

:::warning Production sign-off
Use insecure SSL mode only in a **controlled** environment. For production-style QA, run **without** this flag so certificate tests execute.
:::

## Security-related tests (summary)

| Area | What fails |
|------|------------|
| HTTPS enforcement | HTTP does not redirect to HTTPS |
| Headers | Missing XFO, XCTO, CSP (or CSP-Report-Only) on the document response |
| HSTS | Missing on HTTPS |
| CORS | `Access-Control-Allow-Origin: *` on the main document |
| Sensitive paths | `/.env`, `/config.php`, `/.git/config` reachable |
| Directory listing | “Index of” style listing |
| Cookies | `Set-Cookie` without Secure and HttpOnly |
| Mixed content | `http://` resources on an HTTPS page |

Full detail: [Security tests](../reference/tests/security.md).

## User-Agent

Requests use `User-Agent: TronQA/2.0`. Some WAFs block unknown agents — you may see timeouts or failures (environment / tooling).

## CSP strictness

Real sites use many CSP shapes. TRON checks **raw document response** headers. If your policy is only on a worker or edge path not seen on the first HTML response, interpret failures in context.
