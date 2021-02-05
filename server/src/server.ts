import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { connect } from "./helpers/database";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// TODO: Add check if all environment vars are defined
(async () => {
    await connect(process.env.DATABASE_URI, process.env.DATABASE_NAME);

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use("/", router);

    app.listen(port, () => {
        console.log(`🚀 Server listening at http://localhost:${port}`);
    });
})();
