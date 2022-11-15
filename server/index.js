const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const { getRandomPokemons, resetPokemons, setName } = require('./controller')

app.get("/api/getRandomPokemons", getRandomPokemons)
app.get("/api/resetPokemons", resetPokemons)
app.post("/api/setName", setName)

app.listen(4000, () => console.log(`up on 4000`))

