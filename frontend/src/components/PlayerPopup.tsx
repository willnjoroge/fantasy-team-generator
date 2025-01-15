import React from "react";
import { Player } from "../../../shared/models/Player";

interface PlayerPopupProps {
  player: Player;
  onClose: () => void;
}

const PlayerPopup: React.FC<PlayerPopupProps> = ({ player, onClose }) => (
  <div
    className="player-popup"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "80%",
      maxWidth: "500px",
      zIndex: 1000,
    }}
  >
    <div
      className="player-content"
      style={{
        display: "flex",
        padding: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <img src="" alt="" />
      <div>
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{player.name}</h2>
        <p style={{ fontSize: "12px", color: "#666" }}>
          {player.position} - {player.team}
        </p>
      </div>
    </div>

    <div
      className="player-stats"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h3>Predicted Score</h3>
      <p>Risk Level</p>
    </div>

    <button
      onClick={onClose}
      style={{
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      &times;
    </button>
  </div>
);

export default PlayerPopup;
