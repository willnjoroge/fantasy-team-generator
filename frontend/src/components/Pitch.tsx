import React, { useState } from "react";
import { Player, Team } from "../../../shared/models/Player";
import api from "../services/api";
import "./Pitch.css";
import PlayerCard from "./PlayerCard";
import PlayerPopup from "./PlayerPopup";

const Pitch: React.FC = () => {
  const [team, setTeam] = useState<Team | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

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
              <PlayerCard
                key={player.id}
                player={player}
                onClick={(player) => setSelectedPlayer(player)}
              />
            ))}
        </div>
        <div className="defenders position">
          {team?.startingXI
            .filter((player) => player.position === "Defender")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onClick={(player) => setSelectedPlayer(player)}
              />
            ))}
        </div>
        <div className="midfielders position">
          {team?.startingXI
            .filter((player) => player.position === "Midfielder")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onClick={(player) => setSelectedPlayer(player)}
              />
            ))}
        </div>
        <div className="forwards position">
          {team?.startingXI
            .filter((player) => player.position === "Forward")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onClick={(player) => setSelectedPlayer(player)}
              />
            ))}
        </div>
      </div>
      <div className="substitutes">
        <h3>Substitutes</h3>
        <div className="substitute-cards">
          {team?.substitutes.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={(player) => setSelectedPlayer(player)}
            />
          ))}
        </div>
      </div>

      {selectedPlayer && (
        <PlayerPopup
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}

      <button onClick={handleGenerateTeam}>Generate Team</button>
    </div>
  );
};

export default Pitch;
