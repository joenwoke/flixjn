import Link from "next/link";
import { createMovie } from "./actions";

export default function NewMoviePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 px-6 py-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-4xl font-bold text-white">
          Add Movie
        </h1>

        <form
          action={createMovie}
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
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-zinc-300"
            >
              Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="watched"
              name="watched"
              type="checkbox"
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
              className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-950/40 hover:bg-red-500"
          >
            Save Movie
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
