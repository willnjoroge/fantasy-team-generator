import axios from 'axios'
import { Player } from '../interfaces/Player'

const API_BASE_URL = 'http://localhost:3000';

const api = {
    fetchTeam: async(): Promise<{team: Player[]}> => {
        const response = await axios.get(`${API_BASE_URL}/generate-team`)
        return response.data;
    }
}

export default api;