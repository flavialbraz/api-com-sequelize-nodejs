// Vai ser uma classe e esse arquivo lida com o CRUD da API
const database = require('../models')

class PessoaController {
    // Aqui vai ser o R (READ)
    static async pegaTodasAsPessoas(req, res) {
        try {
        const todasAsPessoas = await database.Pessoas.findAll() // Espera, vai ate o banco, pega tudo e volta para ser Lido!
        return res.status(200).json(todasAsPessoas)
        } catch(error) {
            return res.status(500).json(error.message) // Responde o status de erro 500 junto com a mensagem em formato JSON
        }
        
    }
    // Aqui vai ser o READ para um id especificio
    // Endpoint para que, quando a pessoa busque na url o id, por exemplo 5, encontre informações da pessoa com esse id 5
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params // Esse id é o que vai estar na URL, que será buscado como parametro na url. Essa linha diz: olha, vai ter uma requisão com esse parametro ID e é lá que voce vai pegar 
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id:Number(id) // Ache um especifico. Esse id já é o ID da coluna
                }})
        return res.status(200).json(umaPessoa)
        } catch(error) {
            return res.status(500).json(error.message) // Responde o status de erro 500 junto com a mensagem em formato JSON
        }

    }

    // Criando nova pessoa com o POST
    static async criaPessoa(req, res) {
        const novaPessa = req.body // vai armezanar as informaações da nova pessoas 
        try {
           const novaPessoaCriada = await database.Pessoas.create(novaPessa)
           return res.status(200).json(novaPessoaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    // Editando um usuario/pessoa 
    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
          const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
          return res.status(200).json(pessoaAtualizada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    //deletando um registro
    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
        await database.Pessoas.destroy({ where: { id: Number(id) }}) // O sequelize aceita o "DESTROY" para deletar um registro
        return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
        return res.status(500).json(error.message)
        }
    }

}


module.exports = PessoaController
