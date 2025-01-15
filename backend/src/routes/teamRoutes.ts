import { Router } from "express";
import { generateTeam } from "../controllers/teamController";

const teamRoutes = Router();

teamRoutes.post("/generate", generateTeam);

export default teamRoutes;
