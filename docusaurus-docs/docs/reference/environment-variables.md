# Environment variables

The **pytest engine** and Electron spawn set these. You can also set them when running `pytest` manually or in CI.

| Variable | Set by app? | Purpose |
|----------|-------------|---------|
| `TRON_SUITE_URL` | Yes (main process) | Target URL; highest priority in `base_url` with `TRON_TARGET_URL`. |
| `TRON_TARGET_URL` | Optional (you) | Alternate env URL override. |
| `TRON_RESULTS_PATH` | Yes | Directory for `results.json` and related files. |
| `TRON_RESULTS_JSON` | Optional | Explicit full path to `results.json`. |
| `TRON_HEADLESS` | Yes | `1` = headless Chrome, `0` = visible (Selenium tests). |
| `PYTEST_CACHE_DIR` | Yes | Pytest cache directory (isolated under userData when packaged). |
| `TRON_PYTEST_CACHE_DIR` | Yes | Alternate env read by the engine for cache path. |
| `TRON_QA_INSECURE_SSL` | You | `1` / `true` / `yes` — disable TLS verify for requests; relax Chrome SSL; **skip** some cert tests. |
| `PYTEST_PLUGINS` | Yes (packaged) | Frozen exe: `pytest_timeout,pytest_jsonreport.plugin` |

## URL normalization

- If the URL has no `http://` or `https://`, a **`https://`** prefix may be added.
- Trailing `/` may be stripped in the fixture.

## Developers

Packaged spawn uses `shell: false` — the process inherits the environment plus the overrides above.
