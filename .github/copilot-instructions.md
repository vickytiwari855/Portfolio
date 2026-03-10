# Copilot / AI Agent Instructions for this repository

This is a Next.js (v14) single-repo portfolio app. The goal of this file is to give AI coding agents the minimal, actionable context needed to be productive here.

- Summary: Next.js app with Tailwind CSS, server-side API routes under `pages/api/`, and build output redirected to `build/` via `next.config.js`.
- How to run:
  - Development: `npm run dev` (runs `next dev`) — serves at http://localhost:3000
  - Build: `npm run build` (runs `next build`) — output placed in `build/` (see `next.config.js`)
  - Start (production): `npm start` (runs `next start`)
  - Lint: `npm run lint`

- Key files and patterns:
  - App bootstrap: `pages/_app.js` — wraps pages with `react-query`'s `QueryClientProvider` and global styles (`styles/globals.css`).
  - Layout: `pages/layout.js` — central UI chrome used across pages (left nav, right rail, mobile behaviors).
  - Pages: all route pages live in `pages/` (e.g., `pages/index.jsx`, `pages/portfolio.jsx`).
  - API routes: `pages/api/*` — serverless handlers. Example: `pages/api/getAllData.js` and `pages/api/saveData.js` connect to MongoDB using `process.env.RAPID_KEY`.
  - Components: grouped under `components/` (subfolders: `HomeComponents/`, `Common/`, `Portfolio/`). Follow existing PascalCase filenames and folder grouping.
  - Static/public assets: `public/` (fonts, images). `pages/api/portfolio.js` returns project entries that reference `projects/*` under `public`.

- Environment and external services:
  - MongoDB connection uses the `RAPID_KEY` environment variable inside API handlers (`pages/api/saveData.js`, `pages/api/getAllData.js`).
  - Twilio is included in `dependencies` — search for any server-side usage before changing credentials.
  - The project includes `@netlify/plugin-nextjs` and a `homepage` field — deployment may target Netlify. Keep `distDir: "build"` in mind when changing build/deploy flows.

- Project conventions and gotchas (observed):
  - Styling is Tailwind + a `globals.css` file. Use existing utility classes and avoid adding global CSS without reason.
  - ESLint is configured to be ignored during builds (`next.config.js` -> `eslint.ignoreDuringBuilds: true`), so lint errors may exist in the tree — do not assume a green lint status on CI.
  - `react-query` is used at app level — prefer using it for async data fetching patterns in components instead of ad-hoc fetch state.
  - API routes typically create and close a `MongoClient` per request. If you modify DB usage, preserve connection lifecycle or centralize it.
  - Components are small and UI-focused (many presentational components). Follow existing structure when adding new UI pieces.

- Examples to reference when editing or adding features:
  - Use `pages/api/saveData.js` as the canonical example for writing a POST handler that inserts into MongoDB.
  - Use `pages/api/getAllData.js` for read handlers that return JSON arrays from the `reviews` collection.
  - Check `pages/_app.js` to see how to register providers (e.g., `QueryClientProvider`) so new pages/components remain consistent.

- Debugging tips:
  - Run `npm run dev` and open the browser at `http://localhost:3000`.
  - API routes are available at `http://localhost:3000/api/<name>` while in dev mode.
  - If testing API routes that need DB access, set `RAPID_KEY` locally (MongoDB connection string).

- Editing and PR guidance for AI contributions:
  - Keep changes minimal and focused; preserve the `components/` grouping.
  - When changing build or deploy settings (e.g., `distDir`), call out implications for Netlify and the `build/` folder.
  - Avoid adding project-wide dependencies without noting why in the PR description.

If any section is unclear or you want more examples (e.g., common component patterns, a list of frequently edited files), tell me what to expand.  
