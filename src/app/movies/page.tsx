import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function MoviesPage() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 px-6 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-zinc-900">Movies</h1>

        {movies.length === 0 ? (
          <p className="text-lg text-zinc-700">No movies found</p>
        ) : (
          <div className="w-full space-y-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="rounded-md border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-zinc-900">
                  {movie.title}
                </h2>
                <p className="mt-2 text-zinc-700">
                  Director: {movie.director}
                </p>
                <p className="text-zinc-700">Genre: {movie.genre}</p>
                <p className="text-zinc-700">
                  Release Year: {movie.releaseYear}
                </p>
              </div>
            ))}
          </div>
        )}

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
