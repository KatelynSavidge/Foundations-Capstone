const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const { submitBtn } = require('./controller')


app.get("/", submitBtn)





















app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))