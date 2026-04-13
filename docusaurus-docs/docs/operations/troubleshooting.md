# Troubleshooting

## Suite does not start / “Engine not found”

- **Packaged:** Missing `resources/pyengine/tron_engine.exe` — reinstall or rebuild with `npm run build:engine` and electron-builder.
- **Dev:** Confirm `pyengine/tron_engine.py` exists on disk.

## Empty results / run ends immediately

- Python crash, bad pytest arguments, or **no tests collected**.
- Check the **Logs** panel and stderr under **userData** or `pyengine/`.

## Many tests show WARNING (Chrome)

- Message like **Chrome/ChromeDriver not available** — install **Google Chrome**. On locked-down machines the driver download may fail.
- `webdriver_manager` downloads drivers from the network — **proxy/firewall** can block it.

## Many FAILED — is the tool broken?

- Start with [Site vs tool](../user-guide/site-vs-tool.md). Most failures are **headers, performance, SEO, or content** on the target site.

## SSL / cert tests always skip

- Is **`TRON_QA_INSECURE_SSL`** enabled? Disable it for full TLS verification and cert tests.

## Antivirus

- False positives on `tron_engine.exe` or Electron unpack — add an exclusion if appropriate.

## SQLite errors → fallback

- If `better-sqlite3` fails to load, the app may use **JSON fallback**; behavior should remain usable; encrypted backup may still be written.

## Permissions

- **userData** must be writable — some corporate profiles restrict this.

## Still stuck?

- **Help → Open Logs Folder** and inspect files.
- [FAQ](../faq.md) and [Environment variables](../reference/environment-variables.md).
