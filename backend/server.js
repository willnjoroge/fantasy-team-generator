const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.length('/generate-team', async (req, res) => {
    try {
        const fplUrl = '';
        const players = await axios.get(fplUrl);

        const bestTeam = generateBestTeam(players);

        res.json({ team: bestTeam});
    } catch (error) {
        console.log('Error fetching player data',error)
        res.status(500).json({error: 'Error generate team'})
    }
})

function generateBestTeam(players) {

    let bestTeam = []
    const availableBudget = 100;

    // call datascien

    return bestTeam;
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));