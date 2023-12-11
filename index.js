const express = require('express')
const app = express()
const cakeRouter = require('./routers/cakeRouter')
const userRouter = require('./routers/userRouter')
const cors = require("cors")

app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());

app.use('/', cakeRouter)
app.use('/', userRouter)

app.listen(5000)