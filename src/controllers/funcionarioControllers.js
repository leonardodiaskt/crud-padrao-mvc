//Importar bibliotecas
const sequelize = require('../config/dbConnect')
const tabelacadastro = require('../models/referenceModels')

class funcionarioControllers{
    
    static async listarDados(req, res){
        await sequelize.sync()
        let dado = await tabelacadastro.findAll({ raw: true,})
        res.status(200).json(dado)
    }
    
    static async listarDado(req, res){
        let index = req.params.id
        await sequelize.sync()
        let dado = await tabelacadastro.findByPk(index)
        res.status(200).json(dado.dataValues)
    }
    
    //-----POST-----
    static async adicionarDados(req, res){
        const resultadoCreate = await tabelacadastro.create(req.body)
        res.status(200).send('Dado criado')
    }
    
    //-----PUT------
    static async atualizaDados (req, res) {
      
        await tabelacadastro.update(
                req.body,
                {
                    where: {id: req.params.id}
                }
            )
    
        res.status(200).send("Atualizado")
    }
    
    //-----DELETE-----
    static async deletaDados (req, res) {
        tabelacadastro.destroy({ where: { id: req.params.id }});
        res.status(200).send("Deletado")
    }
}

module.exports = funcionarioControllers
