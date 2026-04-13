# Menus & shortcuts

This reflects the usual **Electron** menu wiring in `electron/main.js`. Your packaged build should match; treat this as the reference.

## File

| Item | Shortcut | Action |
|------|----------|--------|
| New Test Run | Ctrl+N | Start a new run flow (renderer event) |
| Open Report... | Ctrl+O | Open Archives / report |
| Export Last Report as PDF | Ctrl+E | PDF save dialog |
| Export Last Report as DOCX | — | DOCX save dialog |
| Exit | Ctrl+Q | Quit |

## View

| Item | Shortcut | Action |
|------|----------|--------|
| Zoom In / Out / Reset | Ctrl+Plus / Minus / 0 | Standard zoom |
| Toggle Sidebar | Ctrl+B | Show or hide sidebar |
| Archives / History | — | History view |
| Toggle Developer Tools | F12 | DevTools |
| Full Screen | F11 | Full screen |

## Tools

| Item | Action |
|------|--------|
| Preferences | Settings UI |
| Clear All Reports | Clear stored reports |
| Open Logs Folder | Open **userData** in the file manager |
| Install Python Dependencies | Hints / pip flow (mainly for dev setups) |

## Help

| Item | Action |
|------|--------|
| Check for Updates... | Fetch `version.json` from the update base URL |
| Documentation | Open browser — marketing or docs URL |
| Report a Bug | Mailto link |
| About TRON | About dialog |

## Updates

- Default check uses `https://tronq.vercel.app/version.json` — see [Updates](../operations/updates.md).
