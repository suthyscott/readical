require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env

// DB imports
const {sequelize} = require('./util/database')
const {seedDatabase} = require('./util/seed')
const {User} = require('./models/user')
const {Book} = require('./models/book')
const {Topic} = require('./models/topic')
const {BookTopic} = require('./models/bookTopic')

// DB relationships
User.hasMany(Book)
Book.belongsTo(User)

Book.hasMany(BookTopic)
BookTopic.belongsTo(Book)

Topic.hasMany(BookTopic)
BookTopic.belongsTo(Topic)

// Controller imports
const {register, login} = require('./controllers/authCtrl')

const app = express()

app.use(express.json())
app.use(cors())


app.post('/api/register', register)
app.post('/api/login', login)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())
    .then(() => app.listen(SERVER_PORT, console.log(`Take us to warp ${SERVER_PORT}!`)))
    .catch(err => console.log(err))