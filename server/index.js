// server/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
