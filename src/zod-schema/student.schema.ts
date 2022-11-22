import { TypeOf, z } from "zod";

export const studentSchema = z.object({
  body: z.object({
    id: z.string({ required_error: "ID is required" }).min(3),
    name: z
      .string({ required_error: "Name is required" })
      .min(4, "Nmae must be mare than 4 char"),
    major: z.enum(["IT", "IS", "CS","SWE"], {
      required_error: "Major is required",
    }),
    Level: z.number({ required_error: "Number is required" }).max(8).min(1),
    GPA: z.number({ required_error: "Number is required" }).min(0).max(5),
  }),
});

export type studentSchemaType = TypeOf<typeof studentSchema>["body"];
