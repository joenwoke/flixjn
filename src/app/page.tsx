import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-6 py-16 text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-zinc-900">FlixJN</h1>
        <p className="mt-6 text-lg text-zinc-700">
          A personal movie tracker for saving, rating, and organizing movies.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/movies"
            className="rounded-md bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-700"
          >
            View Movies
          </Link>
          <Link
            href="/movies/new"
            className="rounded-md border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Add Movie
          </Link>
        </div>
      </div>
    </main>
  );
}
