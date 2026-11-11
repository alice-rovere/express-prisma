//Base url : /books
import express from "express";
import prisma from "../lib/prisma.js";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controller/bookController.js";

const router = express.Router();
router.get("/", index);

router.get("/:id", show);

router.post("/", store);

router.put("/:id", update);

router.patch("/:id", update);

router.delete("/:id", destroy);

export default router;
