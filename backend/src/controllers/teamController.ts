import { Request, Response } from "express";
import { fetchPlayerData } from "../services/fantasyApiService";
import { generateOptimalTeam } from "../services/dataScienceService";

export const generateTeam = async (req: Request, res: Response) => {
  try {
    const playerData = await fetchPlayerData();
    const team = await generateOptimalTeam(playerData, req.body.preferences);
    res.status(200).json(team);
  } catch (error) {
    console.error("Error generating team", error);
    res.status(500).json({ sucess: false, message: "Internal Server error" });
  }
};
