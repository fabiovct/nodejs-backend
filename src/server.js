const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

//mongoose.connect('mongodb://fabiovc:fabiovct@clusters-shard-00-00-mtcdq.mongodb.net:27017/admin?ssl=true&replicaSet=Clusters-shard-0&authSource=admin&retryWrites=true&w=majority', {

mongoose.connect('mongodb+srv://fabiovct:fabiovct@clusters-mtcdq.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//GET, POST, PUT ,DELETE

//req.query = Acessar query params(para filtros)
//req.params = acessar route params(para edição, delete)
//req.body = acessar corpo da requisição(para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3333);