# Quick start

## 1. Open the app

Launch **TRON QA Suite** from the installed shortcut, or run `npm run dev` for a development build.

## 2. Enter a URL

- Use a full URL, e.g. `https://example.com` or `https://example.com/path`.
- If you omit the scheme, the engine may prepend **`https://`** (see `conftest.py` / env behavior).

## 3. Headless vs visible browser (if the UI offers it)

- **Headless (default):** Chrome runs in the background — faster, fewer pop-ups.
- **Visible browser:** Useful for debugging layout or console-related issues.

Engine: `TRON_HEADLESS=1` is headless, `0` is visible.

## 4. Start the run

Use **Start** / **Run**. Logs stream in; each test updates as it finishes.

## 5. Read the results

- **PASSED** — Check succeeded.
- **FAILED** — Site did not meet a rule or threshold (see the message column).
- **WARNING** — Test was **not executed** (pytest skip); the message explains why.
- **ERROR** — Environment or setup problem.

The score is usually based on **passed vs total** tests (see the UI implementation).

## 6. History and export

- A completed run may be stored under **Archives**.
- **PDF / DOCX:** File menu or toolbar — see [Archives & export](../user-guide/archives-and-export.md).

## Next steps

- [Running a scan](../user-guide/running-a-scan.md) — deeper technical flow.
- [Results & scores](../user-guide/results-and-scores.md) — status semantics.
- [FAQ](../faq.md).
