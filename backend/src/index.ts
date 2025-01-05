import express, { Application } from "express";
import teamRoutessssss from "./routes/teamRoutes";

const app: Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/teams", teamRoutessssss);

app.listen(port, () => console.log(`Server running on port ${port}`));
