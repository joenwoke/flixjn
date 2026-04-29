# FlixJN

FlixJN is my personal movie tracker for saving, rating, and organizing movies. It was built as a full-stack final lab project for ITMD-442.

## Features

- Create movies
- View movies
- Edit movies
- Delete movies
- Search by title
- Filter by genre

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- Neon Postgres
- Vercel

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your database connection string:

```bash
DATABASE_URL="your_neon_postgres_connection_string"
```

Run the Prisma migration:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Deployment

This project is deployed on Vercel. The production database is hosted with Neon Postgres.

## AI Usage

Codex was used for debugging, improving small code blocks, and explaining errors. I reviewed and tested any changes made by Codex before committing it.

Some of the main challenges during development involved working with Prisma 7, configuring the Neon adapter, and getting the Vercel deployment connected correctly to the hosted Neon Postgres database.
