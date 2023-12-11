const express= require("express")
const router = express.Router()
const { CakeController } = require('../controllers/cakeController')

router.get('/cakes', CakeController.getCakes)

router.post('/cake', CakeController.getCake)

module.exports = router