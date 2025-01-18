// Import required modules
const express = require('express');
const path = require('path');

// Initialize express
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join()));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});