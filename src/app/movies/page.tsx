import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteMovie } from "./actions";

type MoviesPageProps = {
  searchParams: Promise<{
    q?: string;
    genre?: string;
  }>;
};

// Server component to display the list of movies with search
export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const { q, genre } = await searchParams;
  const searchText = q?.trim() || "";
  const genreText = genre?.trim() || "";

  // Fetch movies from the DB with optional search filter - block rewritten by Codex
  const movies = await prisma.movie.findMany({
    where: searchText || genreText
      ? {
          AND: [
            searchText
              ? {
                  title: {
                    contains: searchText,
                    mode: "insensitive",
                  },
                }
              : {},
            genreText
              ? {
                  genre: {
                    contains: genreText,
                    mode: "insensitive",
                  },
                }
              : {},
          ],
        }
      : undefined,
    orderBy: {
      title: "asc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 px-6 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-zinc-900">Movies</h1>

        <form action="/movies" className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="search"
            name="q"
            defaultValue={searchText}
            placeholder="Search by title"
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900"
          />
          <input
            type="search"
            name="genre"
            defaultValue={genreText}
            placeholder="Filter by genre"
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900"
          />
          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-5 py-2 font-medium text-white hover:bg-zinc-700"
          >
            Search
          </button>
        </form>

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
                <div className="mt-4 flex gap-3">
                  <Link
                    href={`/movies/${movie.id}/edit`}
                    className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700"
                  >
                    Edit
                  </Link>
                  <form action={deleteMovie.bind(null, movie.id)}>
                    <button
                      type="submit"
                      className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </form>
                </div>
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
