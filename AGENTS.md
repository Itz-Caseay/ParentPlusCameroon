# AGENTS.md

## Run

```bash
npm install && npm start
# → http://localhost:3000
```

No build step, no lint, no tests, no typecheck. Only dev dependency is Express 5 (`express@^5.1.0`).

## Structure

Flat repo — 4 source files, no subdirectories:

| File | Role |
|---|---|
| `server.js` | Express 5 backend (port 3000 or `$PORT`). Serves static files + 3 API routes (`/api/health`, `/api/modules`, `POST /api/feedback`). |
| `index.html` | SPA shell. Loads `app.js` and `styles.css`. |
| `app.js` | All frontend logic. Vanilla JS, no framework. Hash-based routing (`#home`, `#academy`, `#dashboard`, etc.). State in `localStorage`. |
| `styles.css` | Mobile-first CSS with custom properties. Breakpoints at 650px / 900px. |

## Gotchas

- **Express 5, not 4.** Route and error-handling patterns differ (e.g. async error propagation).
- **No persistence.** Feedback endpoint returns data but stores nothing. User data lives only in `localStorage`.
- **English/French toggle is a stub.** Shows a toast but no actual translation.
- **Lessons and modules are hardcoded** in `app.js` (6 lessons) and `server.js` (3 modules).
- **No `.gitignore`.** `node_modules/` would be committed.
- **`dev` and `start` scripts are identical** (`node server.js`). No hot-reload or watch mode.
