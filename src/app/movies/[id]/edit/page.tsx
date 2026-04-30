import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { updateMovie } from "./actions";

type EditMoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditMoviePage({ params }: EditMoviePageProps) {
  const { id } = await params;
  const movieId = Number(id);

  if (Number.isNaN(movieId)) {
    notFound();
  }

  // Fetch the movie from the database using Prisma
  const movie = await prisma.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  if (!movie) {
    notFound();
  }

  // Render the edit form with the movie data pre-filled
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 px-6 py-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-4xl font-bold text-white">
          Edit Movie
        </h1>

        <form
          action={updateMovie.bind(null, movie.id)}
          className="mt-8 space-y-5 rounded-md border border-zinc-800 bg-zinc-950/75 p-6 shadow-2xl shadow-red-950/20"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-zinc-300"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={movie.title}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="director"
              className="block text-sm font-medium text-zinc-300"
            >
              Director
            </label>
            <input
              id="director"
              name="director"
              type="text"
              required
              defaultValue={movie.director}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-zinc-300"
            >
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              required
              defaultValue={movie.genre}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="releaseYear"
              className="block text-sm font-medium text-zinc-300"
            >
              Release Year
            </label>
            <input
              id="releaseYear"
              name="releaseYear"
              type="number"
              required
              defaultValue={movie.releaseYear}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-zinc-300"
            >
              Rate out of 10
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="10"
              placeholder="1-10"
              defaultValue={movie.rating ?? ""}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="watched"
              name="watched"
              type="checkbox"
              defaultChecked={movie.watched}
              className="h-4 w-4 rounded border-zinc-700 accent-red-600"
            />
            <label htmlFor="watched" className="text-sm font-medium text-zinc-300">
              Watched
            </label>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-zinc-300"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              defaultValue={movie.notes ?? ""}
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-950/40 hover:bg-red-500"
          >
            Update Movie
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/movies" className="font-medium text-zinc-300 underline hover:text-white">
            Back to Movies
          </Link>
        </div>
      </div>
    </main>
  );
}
