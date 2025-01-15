import cron from "node-cron";
import { fetchPlayerData } from "../services/fantasyApiService";

export const fetchPlayerDataJob = async () => {
  console.log("Fetching player data job started");
  await fetchPlayerData();
};

cron.schedule("0 0 * * *", fetchPlayerDataJob);
