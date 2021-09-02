const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 80;

const app = express();

app.listen(port, (req, res) => {
  console.log(`Servidor Rodando! Url: http://localhost:${port}`);
});
