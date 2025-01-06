import express, { Express } from "express";
import teamRoutes from "./routes/teamRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());
app.use;

app.use("/api/teams", teamRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
