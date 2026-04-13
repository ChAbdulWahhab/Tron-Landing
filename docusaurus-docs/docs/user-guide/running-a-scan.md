# Running a scan

## URL input

- The renderer sends the URL to the **Electron main** process.
- When the engine starts, **`TRON_SUITE_URL`** is set (and in packaged mode **`TRON_RESULTS_PATH`** points at **userData**).
- **Precedence:** Environment variables `TRON_SUITE_URL` or `TRON_TARGET_URL` (when running pytest directly), then the `--url` CLI option — see [Environment variables](../reference/environment-variables.md).

## What happens during a run

1. `results.json` in the writable directory is **reset**.
2. **Process spawn:**
   - **Packaged:** `tron_engine.exe` with `--json-report` and report file path.
   - **Dev:** `python` / `python3` plus `pyengine/tron_engine.py` and the same arguments.
3. **pytest** runs all collected tests; after each test, `results.json` is **updated** (live UI refresh).
4. **Stdout/stderr** appear line by line in the log panel.
5. On **exit**, final results are sent; if at least one test ran, a row may be saved to **SQLite** (Archives).

## Stop

Stopping kills the process tree (on Windows, `taskkill`). A stopped run may leave **partial** results.

## Timeouts

- Default HTTP timeout in the engine is **10 seconds** (`TIMEOUT` in `tron_engine.py`).
- Some tests (e.g. `test_no_console_errors`, `test_mobile_rendering`) use a **pytest timeout of 120s** — slow pages take longer.

## Same URL again

Each run can create a **new** history row. Older rows are not overwritten unless app behavior changes.

## CLI / CI (without Electron)

See [Engine (pytest) CLI](../developer/pytest-cli.md) for pipelines and local debugging.
