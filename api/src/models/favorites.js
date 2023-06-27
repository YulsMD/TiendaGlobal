const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'favorites',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      idProduct: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
}
