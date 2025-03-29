// index.js
const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculator');

// Middleware to parse JSON
app.use(express.json());

// Use the calculator routes
app.use('/api', calculatorRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
