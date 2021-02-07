import { Router } from "express";
import * as AuthController from "../controllers/AuthController";

const router = Router();

router.post("/login", async (req, res) => {
    const { code, response } = await AuthController.login(req.body);
    res.status(code).json(response);
});

router.post("/signup", async (req, res) => {
    const { code, response } = await AuthController.signup(req.body);
    res.status(code).json(response);
});

export default router;
