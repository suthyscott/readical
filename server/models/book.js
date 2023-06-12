const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
   Book: sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        length: DataTypes.INTEGER,
        author: DataTypes.STRING,
        desc: DataTypes.STRING(2000),
        priority: DataTypes.INTEGER,
        imgUrl: DataTypes.TEXT,
        progress: DataTypes.INTEGER
    })
}