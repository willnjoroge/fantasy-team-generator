import { Router } from "express";
import { generateTeam } from "../controllers/teamController";

const teamRoutes = Router();

teamRoutes.get("/generate", generateTeam);

export default teamRoutes;
