const express = require("express")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

const { getRandomPokemons, resetPokemons, setName } = require('./controller', './pageCtrl')


app.get("/api/getRandomPokemons", getRandomPokemons)
app.get("/api/resetPokemons", resetPokemons)
app.post("/api/setName", setName)


const { PORT } = process.env
app.listen(PORT, () => console.log(`up on 4000`))

