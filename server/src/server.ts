import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
    console.log(`🚀 Server listening at http://localhost:${port}`);
});
