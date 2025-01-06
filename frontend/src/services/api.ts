import axios from "axios";
import { Player, Team } from "../../../shared/models/Player";

const API_BASE_URL = "http://localhost:5000";

const api = {
  fetchTeam: async (): Promise<Team> => {
    const response = await axios.get(`${API_BASE_URL}/api/teams/generate`);
    console.log(response);
    return response.data;
  },
};

export default api;
