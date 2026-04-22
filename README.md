# Wedding invitation

## What this project is

| Part | Tech | Role |
|------|------|------|
| [frontend/](frontend) | React 19, CRACO, Tailwind, Radix/shadcn-style UI | The wedding invitation (Hero, Events, Loader, etc.) — this is what you see in the browser. |
| [backend/server.py](backend/server.py) | FastAPI, Motor (MongoDB) | Example API under `/api` (e.g. status checks). **Not used by the current `App.js` screens** — there are no `fetch`/`axios` calls in [frontend/src](frontend/src). |

The [frontend/README.md](frontend/README.md) is the generic Create React App guide. Scripts are defined in [frontend/package.json](frontend/package.json):

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

## How to run locally (recommended: frontend only)

**Prerequisites:** [Node.js](https://nodejs.org/) LTS (includes npm). The project pins `packageManager` to **Yarn 1.22.22** in `package.json`; you can use **npm** instead if you prefer. On **Windows**, ensure the Node.js installer added Node to your **system PATH** (so both `node` and `npm` work in a new terminal). [frontend/.npmrc](frontend/.npmrc) sets `legacy-peer-deps=true` so `npm install` can resolve a known `date-fns` / `react-day-picker` peer mismatch.

1. Open a terminal and go to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or, if you use Yarn 1:

   ```bash
   yarn install
   ```

3. Start the dev server:

   ```bash
   npm start
   ```

   or `yarn start`

4. Open the app at **http://localhost:3000** (default for CRACO/CRA; the terminal prints another port if 3000 is taken).

**Production build (optional):** `npm run build` — output goes to `frontend/build/`, which you can serve with any static host.

## Optional: run the backend

Only needed if you want to exercise the FastAPI API, not to view the invitation.

**Prerequisites:** Python 3.10+ (typical for this stack), a **MongoDB** instance (local or [Atlas](https://www.mongodb.com/cloud/atlas)), and a virtual environment.

1. `cd backend`
2. Create/activate a venv, then:

   ```bash
   pip install -r requirements.txt
   ```

3. Create `backend/.env` (this file is not in the repo). `server.py` loads it and requires:

   - **Required:** `MONGO_URL` (e.g. `mongodb://localhost:27017` or an Atlas SRV string), `DB_NAME`
   - **Optional:** `CORS_ORIGINS` (comma-separated; default allows `*` per code)

4. From the `backend` directory, run Uvicorn:

   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

5. API base: `http://localhost:8000/api/...` (e.g. `GET http://localhost:8000/api/`)

## Summary

- **To see the wedding site locally:** install and `start` in **frontend**; use **http://localhost:3000**.
- **Backend** is separate and **requires MongoDB + `backend/.env`**; the invitation page does not depend on it today.
