import express from "express"
import { createBug, getAllbugs, getBug, updateBug, deleteBug } from "../controller/bug.controller.js";

const router = express.Router();

router.route("/").post(createBug).get(getAllbugs);
router.route("/:id").get(getBug).patch(updateBug).delete(deleteBug);


export default router;