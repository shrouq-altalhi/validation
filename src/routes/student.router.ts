import express from "express";
import { z } from "zod";
import validate from "../middleware/validate";
import { studentSchema, studentSchemaType } from "../zod-schema/student.schema";
const router = express.Router();

let student: studentSchemaType[] = [];

router.get("/", (req, res, next) => {
  return res.json(student);
});

router.get("/:major", (req, res, next) => {
  const { major } = req.params;
  const findByMajor = student.filter((find) => {
    return find.major === major;
  });
  student = findByMajor;
  return res.status(200).json(findByMajor);
});

router.post("/", validate(studentSchema), (req, res) => {
  const newSoftware = req.body as studentSchemaType;
  student.push(newSoftware);
  return res.status(201).json({ message: "Software Added!" });
});

router.put("/:id", validate(studentSchema), (req, res) => {
  const upSoftware = req.body as studentSchemaType;
  const { id } = req.params;
  const updateSoftware = student.filter((std) => {
    return std.id !== id;
  });
  updateSoftware.push(upSoftware);
  student = updateSoftware;
  return res.status(201).json({ message: "Software Added!" });
});

router.delete("/:id", validate(studentSchema), (req, res) => {
  const { id } = req.params;
  const deletedSoftware = student.filter((std) => {
    return std.id !== id;
  });
  student = deletedSoftware;
  return res.status(201).json({ message: "Software Deleted!" });
});

export default router;
