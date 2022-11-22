import { TypeOf, z } from "zod";

export const bankSchema = z.object({
  body: z.object({
    id: z.string().min(3),
    username: z
      .string({ required_error: "Username is required" })
      .min(6, "Usename must be mare than 4 char"),
    password: z
      .string({ required_error: "password is required" })
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*")),
    balance: z
      .number({
        required_error: "Balance is required",
      })
      .positive()
      .min(1)
      .max(5),
  }),
});

export type bankSchemaType = TypeOf<typeof bankSchema>["body"];
