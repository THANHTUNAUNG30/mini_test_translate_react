const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;
const jsonFilePath = path.join(__dirname, 'words.json');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle POST requests from React
app.post('/api/words', async (req, res) => {
  try {
    const { word, definition } = req.body;

    // Read existing words from JSON file
    const rawData = await fs.readFile(jsonFilePath);
    const words = JSON.parse(rawData);

    // Add new word to the array
    words.push({ word, definition });

    // Write updated words array back to JSON file
    await fs.writeFile(jsonFilePath, JSON.stringify(words, null, 2));

    res.status(201).json({ message: 'Word added successfully' });
  } catch (error) {
    console.error('Error adding word:', error);
    res.status(500).json({ message: 'Failed to add word' });
  }
});

// Endpoint to handle GET requests for testing
app.get('/', (req, res) => {
  res.send('Hello from Express Server');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
