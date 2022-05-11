const Sequelize = require('sequelize')
const sequelize = require('../config/dbConnect')

const tabelacadastro = sequelize.define('Users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ni: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = tabelacadastro
