import React from 'react'
import { Player } from '../interfaces/Player';

interface PlayerCardProps {
    player: Player
}

const PlayerCard: React.FC<PlayerCardProps> = ({player}) => (
    <div className="player-card">
        <h3>{player.name}</h3>
        <p>Position: {player.position}</p>
        <p>Team: {player.team}</p>
        <p>Price: £{player.price.toFixed(1)}</p>
    </div>
)

export default PlayerCard;