import Link from "next/link";

export default function MoviesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-6 py-16 text-center">
      <div className="flex max-w-xl flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-zinc-900">Movies</h1>
        <p className="text-lg text-zinc-700">Movies page coming soon</p>

        <Link
          href="/"
          className="rounded-md bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-700"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
