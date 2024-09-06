const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'Recruto';
  const message = req.query.message || 'Давай дружить';
  
  res.send(`Hello ${name}! ${message}`);
});

app.listen(port, () => {
  console.log(`Сервис запущен на http://localhost:${port}`);
});
