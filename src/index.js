const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://127.0.0.1/omnistack10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);

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

