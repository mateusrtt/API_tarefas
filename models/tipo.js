const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class tipo extends Model{}
tipo.init({
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
      }
},{
    sequelize,
    modelName:'tipos'
  }
)
sequelize.sync()
 module.exports = tipo 