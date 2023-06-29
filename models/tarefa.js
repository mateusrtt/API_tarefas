const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const { tableName } = require('./usuario')
const Usuario = new require('./usuario')
const tipo = new require('./tipo')
class Tarefa extends Model{}
Tarefa.init({
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
      },
    data_cadastro: {
        type: DataTypes.STRING,
        allowNull:false
      },
    data_conclusao: {
        type: DataTypes.STRING,
        allowNull:false
      },
    },{
        sequelize,
        modelName:'Tarefas'
      })

      tipo.hasOne(Tarefa) 
      Tarefa.belongsTo(tipo) 

      Usuario.hasMany(Tarefa)
      Tarefa.belongsTo(Usuario)

     sequelize.sync()
     module.exports = Tarefa
