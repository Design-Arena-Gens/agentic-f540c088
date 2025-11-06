# Agentic Hello

A playful landing page produced autonomously by Codex after receiving nothing more than a friendly greeting. Built with Next.js 14 and ready to deploy on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000`.

## Scripts

- `npm run dev` – Start a local development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production server.
- `npm run lint` – Check for lint issues.

## Project Highlights

- App Router layout in `app/` with global styling in `app/globals.css`.
- Interactive landing page showcasing autonomous generation details in `app/page.tsx`.
- Lightweight conversational widget in `components/Conversation.tsx`.

## Deployment

This project is Vercel-ready. Once built locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-f540c088
```
