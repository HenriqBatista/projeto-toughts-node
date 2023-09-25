const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao banco de dados!')
} catch (error) {
    console.log(`Não foi possivel conectar ao banco de dados: ${error}`)
}


module.exports = sequelize