import React, { useState } from 'react';
import { Player } from '../interfaces/Player';
import api from '../services/api'


const Pitch: React.FC = () => {
    const [team, setTeam] = useState<Player[]>([])

    const handleGenerateTeam = async () => {
        try {
            const response = await api.fetchTeam();
            setTeam(response.team)
        } catch (error) {
            console.error('Error generating team', error)
        }
    };

    return (
        <div className="Pitch">
            <h1>Fantasy Team Generator</h1>
            <div className="Field">
                <div className="Goalkeepers"></div>
                <div className="Defenders"></div>
                <div className="Midfielders"></div>
                <div className="Forwards"></div>
            </div>

            <button onClick={handleGenerateTeam}>Generate Team</button>
        </div>
    )

}

export default Pitch;