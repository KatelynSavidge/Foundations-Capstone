let pokemon1 = -1;
let pokemon2 = -1;
let pokemon3 = -1;
let name = "";

module.exports = {

   getRandomPokemons: (req, res) => {
        let totalPossiblePokemon = 11;
        //get values 0 - 11
        pokemon1 = Math.floor(Math.random() * totalPossiblePokemon)
        pokemon2 = Math.floor(Math.random() * totalPossiblePokemon)
        pokemon3 = Math.floor(Math.random() * totalPossiblePokemon)
        let pokemons = {
            pokemon1: pokemon1,
            pokemon2: pokemon2,
            pokemon3: pokemon3
        }
        res.status(200).send(pokemons);
    },

    resetPokemons: (req, res) => {
        pokemon1 = -1;
        pokemon2 = -1;
        pokemon3 = -1;
        res.status(200).send();
    },

    setName: (req, res) => {
        name = req.body.name;
        res.status(200).send();
    }
}