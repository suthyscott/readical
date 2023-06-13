require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

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
const {register, login, checkUser, logout} = require('./controllers/authCtrl')
const {addNewBook, getUserBooks, getBookDeets, editBook, deleteBook} = require('./controllers/booksCtrl')
const {getAllTopics} = require('./controllers/topicCtrl')

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))


app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.post('/api/logout', logout)

app.post('/api/books', addNewBook)
app.get('/api/books/:userId', getUserBooks)
app.get('/api/book/:bookId', getBookDeets)
app.put('/api/book', editBook)
app.delete('/api/book/:bookId', deleteBook)

app.get('/api/topics', getAllTopics)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())
    .then(() => app.listen(SERVER_PORT, console.log(`Take us to warp ${SERVER_PORT}!`)))
    .catch(err => console.log(err))