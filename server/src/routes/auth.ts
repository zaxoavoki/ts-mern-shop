import { Router, Response, Request } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post("/login", async (req, res) => {
    const [status, response] = await AuthController.login(req.body);
    res.status(status).json(response);
});

router.post("/signup", async (req, res) => {
    const [status, response] = await AuthController.signup(req.body);
    res.status(status).json(response);
});

export default router;
