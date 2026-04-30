import Link from "next/link";
import Script from "next/script";
import prisma from "@/lib/prisma";
import { deleteMovie } from "./actions";

type MoviesPageProps = {
  searchParams: Promise<{
    q?: string;
    genre?: string;
    success?: string;
  }>;
};

// Server component to display the list of movies with search
export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const { q, genre, success } = await searchParams;
  const searchText = q?.trim() || "";
  const genreText = genre?.trim() || "";
  const showSuccessMessage = success === "1";

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
    <>
      <Script id="confirm-delete-movie" strategy="afterInteractive">
        {`
          document.addEventListener("submit", function (event) {
            const form = event.target;

            if (!(form instanceof HTMLFormElement)) {
              return;
            }

            if (form.dataset.confirmDelete !== "true") {
              return;
            }

            if (!window.confirm("Are you sure you want to delete this movie?")) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }, true);
        `}
      </Script>
      {showSuccessMessage && (
        <Script id="hide-success-message" strategy="afterInteractive">
          {`
            window.setTimeout(function () {
              const message = document.getElementById("success-message");

              if (message) {
                message.classList.add("opacity-0");
              }

              const url = new URL(window.location.href);
              url.searchParams.delete("success");
              window.history.replaceState({}, "", url);

              window.setTimeout(function () {
                if (message) {
                  message.remove();
                }
              }, 500);
            }, 3000);
          `}
        </Script>
      )}

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 px-6 py-16">
        <div className="flex w-full max-w-3xl flex-col items-center gap-6">
          <h1 className="text-5xl font-bold text-white">Movies</h1>

          {showSuccessMessage && (
            <p
              id="success-message"
              className="w-full rounded-md border border-emerald-500/40 bg-emerald-950/70 px-4 py-3 text-center font-medium text-emerald-200 opacity-100 transition-opacity duration-500"
            >
              Movie saved successfully
            </p>
          )}

          <Link
            href="/movies/new"
            className="rounded-md bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-950/40 hover:bg-red-500"
          >
            Add Movie
          </Link>

          <form action="/movies" className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="search"
              name="q"
              defaultValue={searchText}
              placeholder="Search by title"
              className="w-full rounded-md border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-red-500 focus:outline-none"
            />
            <input
              type="search"
              name="genre"
              defaultValue={genreText}
              placeholder="Filter by genre"
              className="w-full rounded-md border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-500"
            >
              Search
            </button>
          </form>

          {movies.length === 0 ? (
            <p className="rounded-md border border-zinc-800 bg-zinc-950/70 px-5 py-4 text-lg text-zinc-300">
              No movies found
            </p>
          ) : (
            <div className="w-full space-y-4">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="rounded-md border border-zinc-800 bg-zinc-950/75 p-5 shadow-lg shadow-red-950/20 transition duration-200 hover:scale-[1.02] hover:border-red-500/50 hover:shadow-red-900/40"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {movie.title}
                  </h2>
                  <p className="mt-2 text-zinc-300">
                    Director: {movie.director}
                  </p>
                  <p className="text-zinc-300">Genre: {movie.genre}</p>
                  <p className="text-zinc-300">
                    Release Year: {movie.releaseYear}
                  </p>
                  <span
                    className={
                      movie.watched
                        ? "mt-3 inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white"
                        : "mt-3 inline-block rounded-full bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-200"
                    }
                  >
                    {movie.watched ? "Watched" : "Not Watched"}
                  </span>
                  <div className="mt-4 flex gap-3">
                    <Link
                      href={`/movies/${movie.id}/edit`}
                      className="rounded-md bg-zinc-800 px-4 py-2 font-medium text-white hover:bg-zinc-700"
                    >
                      Edit
                    </Link>
                    <form
                      action={deleteMovie.bind(null, movie.id)}
                      data-confirm-delete="true"
                    >
                      <button
                        type="submit"
                        className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-500"
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
            className="rounded-md border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800"
          >
            Back Home
          </Link>
        </div>
      </main>
    </>
  );
}
