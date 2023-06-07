const { Book } = require("../models/book")
const { BookTopic } = require("../models/bookTopic")

module.exports = {
    addNewBook: async (req, res) => {
        try {
            const { title, length, author, desc, priority, userId, selectedTopics } =
                req.body

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
    }
}
