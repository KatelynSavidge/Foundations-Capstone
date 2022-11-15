const submitBtn = document.getElementById("submit")
const enterNameToPlay = document.getElementById("enter-name-to-play")
const nameInput = document.getElementById("name-input")
const yourName = document.getElementById("your-name")
const pokemon1 = document.getElementById("pokemon-1")
const pokemon2 = document.getElementById("pokemon-2")
const pokemon3 = document.getElementById("pokemon-3")
const playBtn = document.getElementById("playBtn")
const resetBtn = document.getElementById("resetBtn")

const getSubmit = () => {
    const name = nameInput.value; //.value will grab the text inside the text box.

    //Make sure the name is not empty before moving forward.
    if (name !== "") {
        const body = {
            name: name,
        }
        axios.post("http://localhost:4000/api/setName/", body)
        .then((res) => {
            enterNameToPlay.hidden = true;
            nameInput.style.display = "none";
            submitBtn.hidden = true;
            playBtn.hidden = false;
            resetBtn.hidden = false;
            yourName.innerHTML = `Welcome, ${name}`;
        })
    }
}

const getRandomPokemons = () => {
    const possiblePokemon = [
        "pokemon icons/ico-a_old_001.gif",
        "pokemon icons/ico-a_old_004.gif",
        "pokemon icons/ico-a_old_007.gif",
        "pokemon icons/ico-a_old_025.gif",
        "pokemon icons/ico-a_old_039.gif",
        "pokemon icons/ico-a_old_041.gif",
        "pokemon icons/ico-a_old_054.gif",
        "pokemon icons/ico-a_old_133.gif",
        "pokemon icons/ico-a_old_143.gif",
        "pokemon icons/ico-a_old_151.gif",
        "pokemon icons/ico-a_old_155.gif",
    ];
    axios.get("http://localhost:4000/api/getRandomPokemons/")
    .then(res => {
        pokemon1.src = possiblePokemon[res.data.pokemon1];
        pokemon2.src = possiblePokemon[res.data.pokemon2];
        pokemon3.src = possiblePokemon[res.data.pokemon3];
    });
}

const playGame = () => {
    getRandomPokemons();
}

const resetGame = () => {
    axios.get("http://localhost:4000/api/resetPokemons/")
    .then(res => {
        pokemon1.src = "pokemon icons/ico-a_old_000.gif"
        pokemon2.src = "pokemon icons/ico-a_old_000.gif"
        pokemon3.src = "pokemon icons/ico-a_old_000.gif"
    });
}

submitBtn.addEventListener('click', getSubmit)
playBtn.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)