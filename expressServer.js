const express = require('express');
const axios = require('axios');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: 'Samya7$nsut26',
    database: 'test_center_finder'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

app.get('/search', async (req, res) => {
    const { location, examDetails } = req.query;

    // Example API call to a transportation service
    try {
        const response = await axios.get(`https://api.example.com/transport?location=${location}&examDetails=${examDetails}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
