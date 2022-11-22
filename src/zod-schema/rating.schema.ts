import { TypeOf, z } from "zod";

export const ratingSchema = z.object({
  body: z.object({
    id: z.string(),
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Name must be mare than 3 char"),
    genre: z.enum(["Drama", "Action", "Comedy"], {
      required_error: "Genre is required",
    }),
    rating: z
      .number({
        required_error: "Rating is required",
      })
      .min(1)
      .max(5),
    duration: z
      .number({
        required_error: "Duration is required",
      })
      .min(60),
  }),
});

export type ratingSchemaType = TypeOf<typeof ratingSchema>["body"];
