// Import the "colorList" array
import colorList from "./theme-color-list.js";
// Import the "wordList" array
import wordList from "./hangman-word-list.js";

const musicBtn = document.querySelector(".background-music button");
const colorBtn = document.querySelector(".color-changer button");
const timeBtn = document.querySelector(".timer button");
const timeDisplay = document.querySelector(".count-down");
const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playBtn = document.querySelector(".play");
const streakDisplay = document.querySelector(".streak-count h4");

const MAXGUESSES = 6;
let currentWord, correctLetters, wrongGuessCount, timer, isCounted;
let toPlayMusic = true, streakCount = 0, pressedLetters = [];
const timSets = [0, 60, 30, 15];
let currentTimeSet = 0;
let currentColor = Math.floor(Math.random() * colorList.length);

const resetGame = () => {
    // Resetting all game variables and UI elements
    pressedLetters = []
    correctLetters = [];
    wrongGuessCount = 0;
    isCounted = false;
    timeDisplay.innerText = currentTimeSet ? timSets[currentTimeSet] : "";
    hangmanImage.src = `../assets/images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = (`${wrongGuessCount} / ${MAXGUESSES}`);
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

// Get a random pair of word, hint from the "wordList" array and display them
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(currentWord);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // After 500ms of game complete... showing modal with relevant details
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `../assets/images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? `Congrats!` : `Game Over!`;
        gameModal.querySelector(".content p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        playBtn.innerText = isVictory ? `Next Word` : `Play Again`;
        gameModal.classList.add("show");
        streakCount = isVictory ? streakCount + 1 : 0;
        streakDisplay.innerHTML = streakCount;
    }, 500);
}

const initGame = (button, clickedLetter) => {
    if (!isCounted) {
        countDown();
        isCounted = true;
    }
    // Checking if clickedLetter exist in the current word
    if (currentWord.includes(clickedLetter)) {
        // Showing correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        countDown();
        })
    } else {
        // If clickedLetter doesn't exist then update the wrongGuessCount and hangmanImage
        wrongGuessCount++;
        hangmanImage.src = `../assets/images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = (`${wrongGuessCount} / ${MAXGUESSES}`);

    // Calling gameOver function if any of these condition meets
    if (wrongGuessCount === MAXGUESSES) {
        pause();
        return gameOver(false);
    }
    if (correctLetters.length === currentWord.length) {
        pause();
        return gameOver(true);
    }
}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

// Click to turn on/off the background music
const playMusic = () => {
    const musicPlayer = document.querySelector(".background-music audio");
    musicPlayer.addEventListener("ended", () => {
        musicPlayer.currentTime = 0;
        musicPlayer.play();
    })
    const iconText = toPlayMusic ? "xmark" : "high";
    musicBtn.innerHTML = `<i class="fa-solid fa-volume-${iconText}"></i>`;
    if (toPlayMusic) {
        musicPlayer.muted = false;
    } else {
        musicPlayer.muted = true;
    }
    musicPlayer.play();
    toPlayMusic = !toPlayMusic;
}

// Click to change the color of the theme
const changeTheme = () => {
    const root = document.querySelector(":root");
    const { main, sub } = colorList[(currentColor + 1) % colorList.length];
    root.style.setProperty("--color", main);
    root.style.setProperty("--sub-color", sub);
    currentColor++;
}

// Setting count down timer for every single guess
const setTime = () => {
    if (!isCounted) {
        currentTimeSet = (currentTimeSet + 1) % timSets.length;
        if (timSets[currentTimeSet] !== 0) {
            timeBtn.innerText = timSets[currentTimeSet];
            timeDisplay.innerText = timSets[currentTimeSet];
        } else {
            timeBtn.innerHTML = `<i class="fa-solid fa-stopwatch"></i>`;
            timeDisplay.innerText = "";
        }
    }
}

// Starting the count down
const countDown = () => {
    pause();
    const start = timSets[currentTimeSet];
    if (start !== 0) {
        timeBtn.innerText = start;
        let sec = 0;
        timer = setInterval(() => {
            timeDisplay.innerText = start - sec;
            sec++;
            if (sec > start) {
                pause();
                return gameOver(false);
            }
        }, 1000);
    }
}

// Pausing the count down
const pause = () => {
    clearInterval(timer);
}

// Press down the corresponding key on the keyboard to guess words
document.addEventListener('keydown', (event) => {
    const pressedLetter = event.key.toLowerCase();
    if (pressedLetter.match(/^[a-z]$/) &&
        !pressedLetters.includes(pressedLetter) &&
        wrongGuessCount < MAXGUESSES &&
        correctLetters.length < currentWord.length) {
        pressedLetters.push(pressedLetter);
        const button = keyboardDiv.querySelectorAll("button")[pressedLetter.charCodeAt() - 97];
        initGame(button, pressedLetter);
    }
    if ([...gameModal.classList].includes("show") && pressedLetter === "enter") {
        getRandomWord();
    }
});

playMusic();
changeTheme();
getRandomWord();
playBtn.addEventListener("click", getRandomWord);
musicBtn.addEventListener("click", playMusic);
colorBtn.addEventListener("click", changeTheme);
timeBtn.addEventListener("click", setTime);