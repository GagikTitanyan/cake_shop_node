const { user } = require('../models')
const bcrypt = require("bcrypt")

class UserController {
  static async register(req, res) {
    const { email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    if (await user.findOne({ where: { email } })) {
        try {
            await user.create({
                email,
                password: hashedPassword
            })
            res.status(200).send('user was created')
        } catch(err) {
            res.status(400).send('something was wrong')
        }
    } else {
        res.send('user with this email was already registered')
    }
  }

  static async login(req, res) {
    const { email, password } = req.body
    const lookedUser = await user.findOne({ where: { email } })
    try {
        if (lookedUser && await bcrypt.compare(password, lookedUser.password)) res.status(200).send('hello user')
        else res.status(401).send('something was wrong')
    } catch (err) {
        res.status(500).send(err)
    }
  }
}

module.exports = { UserController }