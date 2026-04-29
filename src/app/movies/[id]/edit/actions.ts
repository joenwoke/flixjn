"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

// Action to update an existing movie in the database
export async function updateMovie(id: number, formData: FormData) {
  const title = formData.get("title")?.toString().trim() || "";
  const director = formData.get("director")?.toString().trim() || "";
  const genre = formData.get("genre")?.toString().trim() || "";
  const releaseYearValue = formData.get("releaseYear")?.toString().trim() || "";
  const ratingValue = formData.get("rating")?.toString().trim();
  const notesValue = formData.get("notes")?.toString().trim();
  const releaseYear = Number(releaseYearValue);
  const rating = ratingValue ? Number(ratingValue) : null;

  if (!title || !director || !genre) {
    throw new Error("Title, director, and genre are required.");
  }

  if (!releaseYearValue || !Number.isFinite(releaseYear)) {
    throw new Error("Release year must be a valid number.");
  }

  if (rating !== null && (!Number.isFinite(rating) || rating < 1 || rating > 10)) {
    throw new Error("Rating must be a number from 1 to 10.");
  }

  await prisma.movie.update({
    where: {
      id,
    },
    data: {
      title,
      director,
      genre,
      releaseYear,
      rating,
      watched: formData.get("watched") === "on",
      notes: notesValue || null,
    },
  });

  revalidatePath("/movies");
  redirect("/movies?success=1");
}
