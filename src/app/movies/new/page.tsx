import Link from "next/link";
import { createMovie } from "./actions";

export default function NewMoviePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 px-6 py-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-4xl font-bold text-zinc-900">
          Add Movie
        </h1>

        <form
          action={createMovie}
          className="mt-8 space-y-5 rounded-md border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-zinc-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="director"
              className="block text-sm font-medium text-zinc-700"
            >
              Director
            </label>
            <input
              id="director"
              name="director"
              type="text"
              required
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-zinc-700"
            >
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              required
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="releaseYear"
              className="block text-sm font-medium text-zinc-700"
            >
              Release Year
            </label>
            <input
              id="releaseYear"
              name="releaseYear"
              type="number"
              required
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-zinc-700"
            >
              Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="watched"
              name="watched"
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300"
            />
            <label htmlFor="watched" className="text-sm font-medium text-zinc-700">
              Watched
            </label>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-zinc-700"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-700"
          >
            Save Movie
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/movies" className="font-medium text-zinc-700 underline">
            Back to Movies
          </Link>
        </div>
      </div>
    </main>
  );
}
