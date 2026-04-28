"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createMovie(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const director = formData.get("director")?.toString() || "";
  const genre = formData.get("genre")?.toString() || "";
  const releaseYear = Number(formData.get("releaseYear"));
  const ratingValue = formData.get("rating")?.toString();
  const notesValue = formData.get("notes")?.toString();

  await prisma.movie.create({
    data: {
      title,
      director,
      genre,
      releaseYear,
      rating: ratingValue ? Number(ratingValue) : null,
      watched: formData.get("watched") === "on",
      notes: notesValue || null,
    },
  });

  revalidatePath("/movies");
  redirect("/movies");
}
