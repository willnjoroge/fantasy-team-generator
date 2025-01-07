import React from "react";
import { Player } from "../../../shared/models/Player";

interface PlayerCardProps {
  player: Player;
  onClick: (player: Player) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick }) => (
  <div className="player-container" onClick={() => onClick(player)}>
    <div
      className="player-card"
      style={{
        width: "5rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      {/* <img src="" alt="" /> */}
      <div style={{ fontWeight: "bold", fontSize: "14px" }}>{player.name}</div>
      <div style={{ fontSize: "12px", color: "#666" }}>{player.position}</div>
    </div>
  </div>
);

export default PlayerCard;
