const express = require('express');
const cors = require('cors');
const models = require('./models');

const port = process.env.PORT || 8000;

const app = express();

let user = models.User;
let produto = models.Produto;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.status(200).json({
    erro: false,
    message: 'Rota GET funcionando!',
  });
});

app.get('/user', async (req, res) => {
  const response = await user.findAll();
  if (response) {
    res.status(200).json({
      erro: false,
      response,
    });
  } else {
    res.status(404).json({
      erro: true,
      message: 'Sem usuários por aqui!',
    });
  }
});

app.post('/createUser', async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
    photo: req.body.photo,
  };

  const response = await user.create(newUser);
  if (response) {
    res.status(200).json({
      erro: false,
      message: 'Usuário postado com sucesso!',
    });
  } else {
    res.status(404).json({
      erro: true,
      message: 'Falha no servidor!',
    });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    erro: true,
    message: 'Essa rota não existe!',
  });
});

app.listen(port, (req, res) => {
  console.log(`Servidor Rodando! Url: http://localhost:${port}`);
});
