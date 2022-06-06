// Ponto de entrada de todas as rotas 
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRouter')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   pessoas,
   niveis,
   turmas
   )
 }