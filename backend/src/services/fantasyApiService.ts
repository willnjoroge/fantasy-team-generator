import axios from "axios";
import redisClient from "../config/redisConfig";

const FANTASY_API_URL =
  "https://fantasy.premierleague.com/api/bootstrap-static/";

export const fetchPlayerData = async (): Promise<any> => {
  // const cachedData = await redisClient.get("playerData");
  // if (cachedData) {
  //   console.log("Returning cached player data");
  //   return JSON.parse(cachedData);
  // }

  console.log("Fetching player data from API");
  const { data } = await axios.get(FANTASY_API_URL);

  // await redisClient.set("playerData", JSON.stringify(data), { EX: 3600 });
  return data;
};
