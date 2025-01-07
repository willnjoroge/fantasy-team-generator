import express, { Express } from "express";
import teamRoutes from "./routes/teamRoutes";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/teams", teamRoutes);

export default app;
