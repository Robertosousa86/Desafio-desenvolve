const express = require('express');
const database = require('./config/database');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.set('view-engine', 'ejs');
app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configura o express e retornar uma nova instância da aplicação configurada.
const configureExpress = () => {
  app.use('/', routes);

  app.database = database;

  return app;
};

// Exporta uma função que retorna uma promise, assim que a promise for resolvida significa que o DB está disponível.
module.exports = async () => {
  const app = configureExpress();

  await app.database.connect();

  return app;
};
