"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function deleteMovie(id: number) {
  await prisma.movie.delete({
    where: {
      id,
    },
  });

  revalidatePath("/movies");
}
