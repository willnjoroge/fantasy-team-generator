import { Request, Response } from "express";
import { generateBestTeam } from "../services/teamService";

export const generateTeam = (req: Request, res: Response) => {
  const budget = parseInt(req.query.budget as string) || 100;
  const team = generateBestTeam([], budget);
  res.json(team);
};
