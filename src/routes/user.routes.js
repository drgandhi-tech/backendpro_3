import express from "express";


// import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/register").post(registerUser)
// router.route("/login").post(login)




export default router