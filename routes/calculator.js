// routes/calculator.js
const express = require('express');
const router = express.Router();

// POST /api/power
router.post('/power', (req, res) => {
  const { base, exponent } = req.body;

  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return res.status(400).json({ error: 'Both base and exponent must be numbers.' });
  }

  const result = Math.pow(base, exponent);
  res.json({ result });
});

// POST /api/sqrt
router.post('/sqrt', (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number' || number < 0) {
    return res.status(400).json({ error: 'Number must be a non-negative value.' });
  }

  const result = Math.sqrt(number);
  res.json({ result });
});

// POST /api/mod
router.post('/mod', (req, res) => {
  const { dividend, divisor } = req.body;

  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    return res.status(400).json({ error: 'Both dividend and divisor must be numbers.' });
  }

  if (divisor === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero.' });
  }

  const result = dividend % divisor;
  res.json({ result });
});

module.exports = router;
