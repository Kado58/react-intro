const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/books', async (req, res) => {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('http://127.0.0.1:5000/GET/api/books');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching book data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const port = 3001; // Choose a port for your proxy server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
