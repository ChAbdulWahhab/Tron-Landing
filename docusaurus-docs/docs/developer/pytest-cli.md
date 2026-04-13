# Engine (pytest) CLI

You can run the same checks **without Electron** — useful for CI and debugging.

## Dependencies

```bash
pip install -r pyengine/requirements.txt
```

## Basic run

```bash
cd pyengine
pytest tron_engine.py --url=https://example.com -v
```

Or:

```bash
python tron_engine.py --url https://example.com
```

(`__main__` invokes pytest.)

## URL via environment

```bash
set TRON_SUITE_URL=https://example.com
pytest tron_engine.py -v
```

(On Linux/macOS, use `export` instead of `set`.)

## Headless / visible browser

```bash
set TRON_HEADLESS=0
pytest tron_engine.py --url=https://example.com -v
```

## Insecure SSL (lab only)

```bash
set TRON_QA_INSECURE_SSL=1
pytest tron_engine.py --url=https://example.com -v
```

## JSON report (optional)

The desktop app spawns the engine with:

```
--json-report --json-report-file=PATH
```

## Notes

- The frozen **`tron_engine.exe`** injects plugins via **`PYTEST_PLUGINS`**.
- Default-style timeouts include **`--timeout=10`** from the engine entrypoint.
