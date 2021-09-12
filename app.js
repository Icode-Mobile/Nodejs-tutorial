const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 80;

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    erro: false,
    message: 'Rota GET funcionando!',
  });
});

app.get('/arquivo', (req, res) => {
  return res.sendFile(__dirname + '/html/arquivo.html');
});

app.listen(port, (req, res) => {
  console.log(`Servidor Rodando! Url: http://localhost:${port}`);
});
