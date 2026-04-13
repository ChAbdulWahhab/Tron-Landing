# Updates

## In-app check

- **Help → Check for Updates...** downloads **`version.json`** over HTTPS from the publish URL in `package.json` (`build.publish.url`, often `https://tronq.vercel.app/`).
- The app compares the current version string to the remote `version` field using a numeric-friendly `localeCompare`.
- If a newer version exists, a dialog is shown and **downloadUrl** may open in the browser.

## Silent vs manual

- The codebase may also perform a **silent** check on startup (no dialog) depending on implementation.

## Failure modes

- Offline or blocked HTTPS → an “Update Check Failed” style message.

## Enterprise networks

- If the update endpoint is blocked, checks fail — **local QA** still works without updates.
