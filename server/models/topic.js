const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Topic: sequelize.define('topic', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        topicName: DataTypes.STRING
    })
}