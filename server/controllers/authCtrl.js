const {User} = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('hit register')
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})
            if(foundUser){
                res.status(400).send("That username is already taken.")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                res.status(200).send({
                    userId: newUser.dataValues.id
                })
            }
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        console.log('hit login')
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})

            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if(isAuthenticated){
                    res.status(200).send({
                        userId: foundUser.dataValues.id
                    })
                } else {
                    res.status(400).send('That password is incorrect')
                }
            } else {
                res.status(400).send('No user with that username exists')
            }
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    }
}