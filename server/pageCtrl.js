const path = require("path")

module.exports={
getRandomPokemons: (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
    },
resetPokemons: (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
    },
setName: (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
    }
}
