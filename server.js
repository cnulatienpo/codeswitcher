const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'code-translator.html'));
});

app.listen(PORT, () => {
  console.log(`CodeSwitcher running on port ${PORT}`);
});
