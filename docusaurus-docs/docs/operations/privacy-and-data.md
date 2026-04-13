# Privacy & data

## Where data lives

- **Electron `userData`** — OS-specific. On Windows this is commonly under `%AppData%` for the app name (exact path from `app.getPath('userData')`).

## Files and artifacts

| Artifact | Purpose |
|----------|---------|
| `tron_qa.dat` | SQLite DB (`better-sqlite3`) — saved URLs, report metadata, **encrypted** `results_json`. |
| `tron_qa_fallback.json` | JSON store if the native DB cannot load. |
| `tron_qa_backup.enc` | AES-encrypted backup of URLs and reports. |
| `results.json` | Live results for the current or last run (packaged: under userData). |
| `pytest-json-report.json` | Pytest JSON report when spawned with the right flags. |
| `.tron-pytest-cache/` | Pytest cache under the writable directory. |
| `.tron_install_uid` | Next to the installed **exe** — identifies this install build. |

## Encryption note

- The `results_json` column is **encrypted at rest** in SQLite using an app-embedded key — **not** a user-supplied secret. Treat this as **local obfuscation / privacy**, not a compliance-grade HSM or KMS.

## URLs

- Saved URLs are stored **only on the local machine** in the app database or fallback file.

## Network

- The engine sends **GET/HEAD** requests to **your target URL** and discovered assets (links, CSS, JS, images, robots, sitemap, etc.).
- **Update check** fetches `version.json` from the configured HTTPS base.
- **Documentation** and **Report a bug** menu items may open external URLs.

## Fresh install wipe

- If `.tron_install_uid` next to the exe **does not match** the value stored in userData, the app may clear old reports and URLs so a new build does not show stale history.

## Stronger removal

- Uninstall the app and **manually delete** the userData folder if you need everything gone.
