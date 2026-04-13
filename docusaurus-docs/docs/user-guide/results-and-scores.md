# Results & scores

## Status labels (UI)

| UI status | Pytest outcome | Meaning |
|-----------|----------------|---------|
| **PASSED** | `passed` | Assertion passed; requirement met. |
| **FAILED** | `failed` | Rule or threshold failed — usually the **website** or HTML content. |
| **WARNING** | `skipped` | Test was **not run** because preconditions failed (HTTP vs HTTPS, SSL mode, missing Chrome, etc.). **This is not a green pass.** |
| **ERROR** | `error` | Setup or teardown failed — often the **machine** (imports, fixtures, driver). |

Source: `pyengine/conftest.py` → `_status_display`.

:::note WARNING means skipped
In the UI, **WARNING** is shown when pytest **skips** a test. Train users: skipped ≠ passed.
:::

## Score

- Typically **percentage** ≈ `passed / total * 100` (total = tests present in the result set).
- **WARNING** rows are not the same as **PASSED**; the UI keeps separate **failed** and **warned** counters. The score numerator is usually **passed** only (see `electron/main.js` → `buildReportPayload`).

## Messages

Each row **message** may be the assertion text, skip reason, or a short traceback (truncated in `conftest.py`). Use it as the first hint when diagnosing a **FAILED** row.

## Categories

Tests are grouped by pytest markers: `performance`, `security`, `seo`, `accessibility`, `links`, `content`, `mobile`, `infrastructure`.

## Suite exit code

- Non-zero is common when tests fail.
- **Empty results** (engine crash, no tests collected) may skip saving history.

## Related

- [Site vs tool](site-vs-tool.md)
- [Test catalog](../reference/test-catalog.md)
- [results.json](../reference/results-json.md)
