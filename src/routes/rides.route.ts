import express from "express";
import { z } from "zod";
import validate from "../middleware/validate";
import { rideSchema, rideSchemaType, } from "../zod-schema/rides.schema";
const router = express.Router();

let parks: rideSchemaType[] = [];

router.get("/", (req, res, next) => {
  return res.json(parks);
});

router.post("/", validate(rideSchema), (req, res) => {
  const newSoftware = req.body as rideSchemaType;
  parks.push(newSoftware);
  return res.status(201).json({ message: "Software Added!" });
});

router.put("/:id", validate(rideSchema), (req, res) => {
  const upSoftware = req.body as rideSchemaType;
  const { id } = req.params;
  const updateSoftware = parks.filter((park) => {
    return park.id !== id;
  });
  updateSoftware.push(upSoftware);
  parks = updateSoftware;
  return res.status(201).json({ message: "Software Added!" });
});

router.delete("/:id", validate(rideSchema), (req, res) => {
  const { id } = req.params;
  const deletedSoftware = parks.filter((park) => {
    return park.id !== id;
  });
  parks = deletedSoftware;
  return res.status(201).json({ message: "Software Deleted!" });
});

export default router;
