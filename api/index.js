const express = require('express')
const routes = require('./routes')
const app = express()

 
const port = 3000;
routes(app)
 

app.listen(port, () => console.log(`Api está rodando na porta ${port}. Acesse: localhost:${port}`))


module.express = app // Exportando aqui para o resto a aplicação o APP do express 