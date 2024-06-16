// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to respond to GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to respond to POST requests to /data
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
