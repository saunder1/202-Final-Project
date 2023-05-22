const express = require('express')
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
const port = 3001;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Enable All CORS Requests
app.use(cors());

app.post('/api', async (req, res) => {
    const { gamertag } = req.body;

    try {
        const response = await fetch(`https://overfast-api.tekrop.fr/players/${gamertag}/summary`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        res.json({ error: error.toString() });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
