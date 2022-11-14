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
    //todo use put to send name to server.

    //Make sure the name is not empty before moving forward.
    if (name !== "") {
        enterNameToPlay.hidden = true;
        nameInput.style.display = "none";
        submitBtn.hidden = true;
        playBtn.hidden = false;
        resetBtn.hidden = false;
        yourName.innerHTML = `Welcome, ${name}`;
    }
}

const shufflePokemon = () => {
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

    pokemon1.src = possiblePokemon[Math.floor(Math.random() * possiblePokemon.length)]
    pokemon2.src = possiblePokemon[Math.floor(Math.random() * possiblePokemon.length)]
    pokemon3.src = possiblePokemon[Math.floor(Math.random() * possiblePokemon.length)]
}

const playGame = () => {
    shufflePokemon();


}


const resetGame = () => {
    pokemon1.src = "pokemon icons/ico-a_old_000.gif"
    pokemon2.src = "pokemon icons/ico-a_old_000.gif"
    pokemon3.src = "pokemon icons/ico-a_old_000.gif"
}


submitBtn.addEventListener('click', getSubmit)
playBtn.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)