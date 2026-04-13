# Archives & export

## Archives (history)

- Each successful run (with at least one test result) can be stored in the **database**.
- Open **Archives** / **History** in the UI to see past runs: URL, date, score, headless flag.
- Dates: SQLite `CURRENT_TIMESTAMP` is treated as UTC and normalized for local display in the app.

## Clearing data

- **Tools → Clear All Reports** clears saved reports (via Electron IPC).
- A **new installer identity** (`.tron_install_uid` next to the exe) can trigger a wipe of old userData so a fresh build does not show stale history — see [Privacy & data](../operations/privacy-and-data.md).

## PDF export

- **File → Export Last Report as PDF** or the matching UI control.
- Uses the snapshot from the **last completed** run.
- After save, the file may open automatically.

## DOCX export

- **File → Export Last Report as DOCX**
- Logo path comes from packaged **resources** (see `getLogoPath` in the main process).

## What is in the export

- URL, run metadata, score summary, and per-test rows (display name, status, message). Layout is defined in `electron/exportReport.js`.

## Tips

- Wait until the run **finishes** before exporting; otherwise “last” may refer to an older run.
