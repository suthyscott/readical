const { Book } = require("../models/book")
const { User } = require("../models/user")
const { BookTopic } = require("../models/bookTopic")
const { Topic } = require("../models/topic")

module.exports = {
    addNewBook: async (req, res) => {
        try {
            const {
                title,
                length,
                author,
                desc,
                priority,
                progress,
                userId,
                selectedTopics
            } = req.body

            const newBook = await Book.create({
                title,
                length,
                author,
                desc,
                progress,
                priority,
                userId
            })

            selectedTopics.forEach(async id => {
                await BookTopic.create({ bookId: newBook.id, topicId: id })
            })

            res.status(200).send(newBook)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Book was not added successfully")
        }
    },
    editBook: async (req, res) => {
        try {
            const {
                progress,
                bookId
            } = req.body

            await Book.update({
                progress,
            }, {where: {id: bookId}})

            const updatedBook = await Book.findOne({
                include: [
                    {
                        model: BookTopic,
                        attributes: ["id"],
                        include: [
                            {
                                model: Topic,
                                attributes: ["id", "topicName"]
                            }
                        ]
                    }
                ]
            })

            res.status(200).send(updatedBook)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Book was not added successfully")
        }
    },

    getUserBooks: async (req, res) => {
        try {
            const { userId } = req.params

            const books = await Book.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["username", "id"],
                        where: { id: userId }
                    },
                    {
                        model: BookTopic,
                        attributes: ["id"],
                        include: [
                            {
                                model: Topic,
                                attributes: ["id", "topicName"]
                            }
                        ]
                    }
                ]
            })

            res.status(200).send(books)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    getBookDeets: async (req, res) => {
        try {
            const { bookId } = req.params

            const book = await Book.findOne({
                where: { id: bookId },
                include: [
                    {
                        model: User,
                        attributes: ["username", "id"]
                    },
                    {
                        model: BookTopic,
                        attributes: ["id"],
                        include: [
                            {
                                model: Topic,
                                attributes: ["id", "topicName"]
                            }
                        ]
                    }
                ]
            })

            res.status(200).send(book)
        } catch (err) {
            console.log(err)
            res.status(400).send("no book found")
        }
    },
    deleteBook: async (req, res) => {
        try{
            const {bookId} = req.params
            await Book.destroy({where: {id: bookId}})
            res.sendStatus(200)

        } catch(err) {
            console.log(err)
            res.status(400).send('cannot delete book')
        }
    }
}
