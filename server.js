import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

app.get('/api/flights', async (req, res) => {
    try {
        const response = await axios.get('https://opensky-network.org/api/states/all');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flight data' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
