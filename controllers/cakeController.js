const { cake } = require("../models")

class CakeController {
    static async getCakes(req, res) {
        res.send(await cake.findAll())
    }
    static async getCake(req, res) {
        res.send(await cake.findOne({
            where: {
                id: req.body.id,
            },
            include: { all: true, nested: true }
        }))
    }
}
module.exports = { CakeController }