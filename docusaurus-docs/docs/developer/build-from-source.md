# Build from source

## Prerequisites

- **Node.js** (LTS recommended)
- **Python 3** + **pip**
- Windows: **Visual Studio Build Tools** if `better-sqlite3` must compile from source
- Optional: **PyInstaller** for frozen engine

## Install

```bash
git clone https://github.com/ChAbdulWahhab/Tron-QASuite
cd Tron-QASuite
npm install
npm run install-py
```

## Dev run

```bash
npm run dev
```

Vite + Electron parallel start.

## Production web assets

```bash
npm run build
```

Output: `dist/`

## Frozen Python engine

```bash
npm run build
npm run build:engine
```

Output: `dist/tron_engine/` (PyInstaller `tron.spec`)

## Windows installer (electron-builder)

```bash
npm run electron:win
```

Icons / NSIS bitmaps: `branding/` — see root `package.json` `build` section.

Manual NSIS: `tron_installer.nsi` comments in file.

## Native module rebuild

```bash
npm run rebuild:electron
```

## Repo map

| Path | Role |
|------|------|
| `electron/` | Main, preload, DB, export |
| `src/` | React UI |
| `pyengine/` | pytest suite |
| `branding/` | Icons, installer art |
| `documentation/` | MkDocs site (this book) |

Root **README.md** — condensed architecture.
