import express from "express";
import { z } from "zod";
import validate from "../middleware/validate";
import { bankSchema, bankSchemaType } from "../zod-schema/bank.schema";
const router = express.Router();

let bank: bankSchemaType[] = [];

router.get("/", (req, res) => {
  return res.json(bank);
});

router.post("/", validate(bankSchema), (req, res) => {
  const newCustomer = req.body as bankSchemaType;
  bank.push(newCustomer);
  return res.status(201).json({ message: "Customer Added!" });
});

router.put("/:id", validate(bankSchema), (req, res) => {
  const upCustomer = req.body as bankSchemaType;
  const { id } = req.params;
  const updateCustomer = bank.filter((bnk) => {
    return bnk.id !== id;
  });
  updateCustomer.push(upCustomer);
  bank = updateCustomer;
  return res.status(201).json({ message: "Customer Updated!" });
});

router.delete("/:id", validate(bankSchema), (req, res) => {
  const { id } = req.params;
  const deletedSCustomer = bank.filter((bnk) => {
    return bnk.id !== id;
  });
  bank = deletedSCustomer;
  return res.status(201).json({ message: "Customer Deleted!" });
});

export default router;
