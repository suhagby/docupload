# DocUpload Monorepo

This repository contains a TurboRepo monorepo with a Next.js 14 application for uploading Excel files.

## Structure

- `apps/web` – frontend built with Next.js 14 using the App Router.
- `packages/ui` – shared React components styled with Tailwind CSS.
- `packages/db` – Prisma schema and database access.
- `packages/tailwind-config` – shared Tailwind configuration.

## Setup

1. Install dependencies with `npm install` at the repo root.
2. Copy `.env.example` to `.env` and provide the required environment variables.
3. Run database migrations with `npx prisma migrate dev` inside `packages/db`.
4. Start the development server:

```bash
npm run dev
```

The app is ready for deployment on Vercel.
