const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/youtube'); // Correct import path
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/learny-io', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a route to retrieve video data
app.get('/videos', async (req, res) => {
  try {
    // Query the database for video documents
    const videos = await Video.find({}, 'channelName url thumbnailUrl title').limit(10);

    // Send the videos as a response
    res.json({ videos });
  } catch (error) {
    // Handle any errors
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
