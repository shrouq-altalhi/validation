import { TypeOf, z } from "zod";

export const rideSchema = z.object({
  body: z.object({
    id: z.string({ required_error: "ID is required" }).min(3),
    name: z
      .string({ required_error: "Name is required" })
      .min(4, "Nmae must be mare than 4 char"),
    type: z.enum(["rollercoaster", "thriller", "water"], {
      required_error: "type is required",
    }),
    tickets: z.number({ required_error: "Number is required" }),
    price: z.number({ required_error: "Number is required" }),
  }),
});

export type rideSchemaType = TypeOf<typeof rideSchema>["body"];
