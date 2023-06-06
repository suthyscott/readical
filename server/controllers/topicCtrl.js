const {Topic} = require("../models/topic")

module.exports = {
    getAllTopics: async (req, res) => {
        try{
            const topics = await Topic.findAll()
            res.status(200).send(topics)
        } catch(err){
            console.log(err)
            res.status(500).send('Could not get topics')
        }
    }
}