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

app.use((req, res, next) => {
  return res.status(404).sendFile(__dirname + '/html/erro.html');
});

app.listen(port, (req, res) => {
  console.log(`Servidor Rodando! Url: http://localhost:${port}`);
});
