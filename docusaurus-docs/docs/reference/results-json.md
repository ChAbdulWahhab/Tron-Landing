# results.json format

Live file updated while the engine runs; the UI reads it over IPC or polling.

## Top-level fields

| Field | Type | Description |
|-------|------|-------------|
| `tests` | array | List of per-test result objects. |
| `completed` | number | Number of entries written so far. |
| `total` | number | Total tests collected in the session. |
| `updated_at` | string | ISO UTC timestamp (`Z` suffix). |

## Each test object

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Pytest function name, e.g. `test_page_load_time`. |
| `display_name` | string | Label from `TEST_NAMES`. |
| `status` | string | `PASSED`, `FAILED`, `WARNING`, `ERROR`. |
| `duration` | number | Seconds (rounded). |
| `message` | string | Failure, skip reason, or status text (may be truncated). |
| `category` | string | From markers: `performance`, `security`, etc. |

## Atomic writes

`conftest.py` writes to a `.tmp` file, then `os.replace` — reduces the chance of half-written JSON.

## Paths

- **Dev:** often `pyengine/results.json`.
- **Packaged:** under app **userData**, e.g. `%AppData%\TRON QA Suite\results.json` on Windows.

## Related

- `pytest-json-report` may also write `pytest-json-report.json` — useful for debugging.
