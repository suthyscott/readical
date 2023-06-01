const {sequelize}= require('./database')
const {Topic} = require('../models/topic')

const topics = [
    {
        topicName: 'Fantasy'
    },
    {
        topicName: 'Historical'
    },
    {
        topicName: 'Fiction'
    }, 
    { 
        topicName: 'Westerns'
    },
    {
        topicName: 'Sci Fi'
    },
    {
        topicName: "Desert"
    }
]

const seedDatabase = async () => {
    await Topic.bulkCreate(topics)
}

module.exports = {
    seedDatabase
}