const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

// esse router é do express
const router = Router()


router.get('/pessoas', PessoaController.pegaTodasAsPessoas )
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa )
router.post('/pessoas', PessoaController.criaPessoa )
router.put('/pessoas/:id', PessoaController.atualizaPessoa ) // Atualiza registro
router.delete('/pessoas/:id', PessoaController.apagaPessoa ) // Deleta registro


module.exports = router