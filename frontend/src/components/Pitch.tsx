import React, { useState } from "react";
import { Team } from "../../../shared/models/Player";
import api from "../services/api";
import "./Pitch.css";

const Pitch: React.FC = () => {
  const [team, setTeam] = useState<Team | null>(null);

  const handleGenerateTeam = async () => {
    try {
      const response = await api.fetchTeam();
      setTeam(response);
    } catch (error) {
      console.error("Error generating team", error);
    }
  };

  return (
    <div className="pitch-container">
      <div className="pitch">
        <div className="goalkeeper position">
          {team?.startingXI
            .filter((player) => player.position === "Goalkeeper")
            .map((player) => (
              <div key={player.id} className="player-card">
                {player.name}
              </div>
            ))}
        </div>
        <div className="defenders position">
          {team?.startingXI
            .filter((player) => player.position === "Defender")
            .map((player) => (
              <div key={player.id} className="player-card">
                {player.name}
              </div>
            ))}
        </div>
        <div className="midfielders position">
          {team?.startingXI
            .filter((player) => player.position === "Midfielder")
            .map((player) => (
              <div key={player.id} className="player-card">
                {player.name}
              </div>
            ))}
        </div>
        <div className="forwards position">
          {team?.startingXI
            .filter((player) => player.position === "Forward")
            .map((player) => (
              <div key={player.id} className="player-card">
                {player.name}
              </div>
            ))}
        </div>
      </div>
      <div className="substitutes">
        <h3>Substitutes</h3>
        <div className="substitute-cards">
          {team?.substitutes.map((player) => (
            <div key={player.id} className="substitute-card">
              {player.name}
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleGenerateTeam}>Generate Team</button>
    </div>
  );
};

export default Pitch;
