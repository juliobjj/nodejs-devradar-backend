const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb://127.0.0.1/omnistack10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333);

/**
 *
 * Métodos HTTP
 *
 * GET = RECEBER UMA INFORMAÇÃO
 * POST = CRIAR ALGUMA INFORMAÇÃO
 * PUT = EDITAR UM RECURSO DA APLICAÇÃO
 * DELETE = DELETAR ALGUMA INFORMAÇÃO
 *
 * Tipos de Parâmetros
 *
 * Query Params: req.query (filtros, paginação, ordenação, ...)
 * Route Params: req. params (identificar um recurso na alteração ou remoção)
 * Body: req.body (dados para criação ou alteração de um registro)
 *
 * MongoDB (Não-Relacional)
 */

