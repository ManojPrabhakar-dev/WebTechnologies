import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

//router.route("/login").post(authUser);
router.post("/login", authUser);

export default router;
