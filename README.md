# Nadeesha's IT Portfolio

Rebuilt from the Claude Design handoff in [design_handoff_portfolio/](design_handoff_portfolio/) as a real project:

- `frontend/` — Next.js (App Router, TypeScript, Tailwind CSS v4). Renders the single-page portfolio (hero, about, skills, projects, education, contact).
- `backend/` — Flask API with a single `/api/contact` endpoint that the contact form submits to. If SMTP env vars aren't set, submissions are appended to `backend/contact_messages.log` instead of emailed, so it works out of the box in dev.

Content (name, projects, links, resume) is still the **placeholder copy** from the design handoff — edit `frontend/src/lib/data.ts` to swap in your real details.

## Run it

**Backend** (Python 3.12+):

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
copy .env.example .env        # then optionally fill in SMTP_* to send real emails
python app.py                 # http://localhost:5000
```

**Frontend** (Node 18+):

```bash
cd frontend
npm install
copy .env.local.example .env.local
npm run dev                   # http://localhost:3000
```

With both running, the contact form on the site posts to the Flask API. Without SMTP configured, check `backend/contact_messages.log` after submitting to see it landed.

## Notes

- `design_handoff_portfolio/` is kept as the original design reference — not part of the running app.
- CORS on the backend is locked to `FRONTEND_ORIGIN` (defaults to `http://localhost:3000`); update it in `backend/.env` if you deploy the frontend elsewhere.
