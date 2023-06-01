const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    BookTopic: sequelize.define('book_topic', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    })
}