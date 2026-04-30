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

AI was used for:
- Explaining Next.js App Router concepts
- Debugging Prisma and Neon Postgres connection issues
- Improving UI design and styling with Tailwind CSS

Challenges I faced included:
- Configuring Prisma with Neon Postgres
- Understanding server actions vs API routes
- Handling form data validation properly
- Ensing deployment worked correctly on Vercel