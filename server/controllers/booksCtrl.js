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
                userId,
                selectedTopics
            } = req.body

            const newBook = await Book.create({
                title,
                length,
                author,
                desc,
                priority,
                userId
            })

            selectedTopics.forEach(async id => {
                await BookTopic.create({ bookId: newBook.id, topicId: id })
            })

            res.sendStatus(200)
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
    }
}
