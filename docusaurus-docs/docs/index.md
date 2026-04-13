# TRON QA Suite documentation

This site documents **TRON Automated QA Suite**: a desktop app that runs automated checks against a URL you provide — performance, security, SEO, accessibility, links, content, mobile, and infrastructure signals.

## Who should read what

| Audience | Start here |
|----------|------------|
| **End users** (install, first scan, reports) | [Installation](getting-started/installation.md) → [Quick start](getting-started/quick-start.md) → [Running a scan](user-guide/running-a-scan.md) |
| **QA / DevOps** (understanding failures) | [Results & scores](user-guide/results-and-scores.md) → [Site vs tool](user-guide/site-vs-tool.md) → [Test catalog](reference/test-catalog.md) |
| **Security** | [Security & SSL](user-guide/security-and-ssl.md) → [Security tests](reference/tests/security.md) |
| **Maintainers** | [Build from source](developer/build-from-source.md) → [Hosting documentation](developer/deployment.md) → repo root `README.md` |

## Quick facts

- **Shell:** Electron + React (Vite). **Engine:** Python + pytest (`pyengine/tron_engine.py`).
- Each check has a **display name** and rules in `TEST_NAMES` and `test_*` functions — reference pages match that code.
- In the UI, **WARNING** means pytest **skipped** the test (preconditions not met). **ERROR** usually means setup or environment.

## Glossary

Short definitions: [Glossary](reference/glossary.md).

## Product site

Marketing and downloads: [tronq.vercel.app](https://tronq.vercel.app/)
