import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 px-6 py-16 text-center">
      <div className="max-w-xl rounded-lg border border-red-900/40 bg-zinc-950/70 p-8 shadow-2xl shadow-red-950/30">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400">
          Movie tracker
        </p>
        <h1 className="text-5xl font-bold text-white">FlixJN</h1>
        <p className="mt-6 text-lg text-zinc-300">
          A personal movie tracker for saving, rating, and organizing movies.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/movies"
            className="rounded-md bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-950/40 hover:bg-red-500"
          >
            View Movies
          </Link>
          <Link
            href="/movies/new"
            className="rounded-md border border-red-500/50 bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800"
          >
            Add Movie
          </Link>
        </div>
      </div>
    </main>
  );
}
