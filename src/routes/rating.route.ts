import express from "express";
import { z } from "zod";
import validate from "../middleware/validate";
import { v4 as uuidv4 } from "uuid";
import { ratingSchema, ratingSchemaType } from "../zod-schema/rating.schema";
const router = express.Router();

let rating: ratingSchemaType[] = [];

router.get("/", (req, res) => {
  return res.json(rating);
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  const findByName = rating.filter((find) => {
    return find.name === name || find.genre === name;
  });
  rating = findByName;
  return res.status(200).json(findByName);
});

router.post("/", validate(ratingSchema), (req, res) => {
  const newRate = req.body as ratingSchemaType;
  // newRate.id = uuidv4();
  rating.push(newRate);

  return res.status(201).json({ message: "New Rating Added!" });
});

router.put("/:id", validate(ratingSchema), (req, res) => {
  const newUpdate = req.body as ratingSchemaType;
  const { id } = req.params;

  const updated = rating.filter((update) => {
    return update.id !== id;
  });
  updated.push(newUpdate);
  rating = updated;
  return res.status(200).json({ message: "Software Added!" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const newDelete = rating.filter((del) => {
    return del.id !== id;
  });
  rating = newDelete;
  return res.status(200).json({ message: "Deleted Sucsses" });
});
export default router;
