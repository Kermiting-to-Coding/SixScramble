console.log('script.js loaded');

// Select a random word from the word list as the target word
let targetWord = '';
let attempts = 0;
let startTime;
let timerEnabled = true; // Variable to track if the timer is enabled
let newWords = []
// Define the keyboard layout
const keyboardLayout = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
    '←' // Use the actual backspace symbol here
];

// Function to set a new target word
function setTargetWord() {
    targetWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log('Target Word:', targetWord); // Log the target word for debugging
}

// Create the keyboard on the screen
function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = ''; // Clear existing keyboard
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.split('').forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.textContent = key;
            keyDiv.onclick = () => handleKeyClick(key);
            rowDiv.appendChild(keyDiv);
        });
        keyboard.appendChild(rowDiv);
    });
}

// Handle key clicks from the virtual keyboard
function handleKeyClick(key) {
    const guessInput = document.getElementById('guessInput');
    if (key === '←') {
        guessInput.value = guessInput.value.slice(0, -1); // Remove last character on backspace
    } else {
        if (guessInput.value.length < 6) {
            guessInput.value += key; // Add character to input if less than 6 characters
        }
    }
}

// Update the visual state of the keyboard based on the guess
function updateKeyboard(guess) {
    const keys = document.querySelectorAll('.key');
    guess.split('').forEach((letter, index) => {
        keys.forEach(key => {
            if (key.textContent === letter) {
                if (letter === targetWord[index]) {
                    key.classList.add('correct');
                } else if (targetWord.includes(letter)) {
                    key.classList.add('present');
                } else {
                    key.classList.add('absent');
                }
            }
        });
    });
}

// Reset the keyboard to its original state
function resetKeyboard() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });
}

// Show the modal with a message
function showModal(message) {
    const modal = document.getElementById('winModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.innerHTML = message;
    modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('winModal');
    modal.style.display = 'none';
}

// Start the timer when the game begins
function startTimer() {
    if (timerEnabled) {
        startTime = new Date();
    }
}

// Calculate and return the time spent
function getTimeSpent() {
    if (!timerEnabled) {
        return 'Timer is disabled';
    }
    const endTime = new Date();
    const timeDiff = endTime - startTime; // Time difference in milliseconds
    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / 60000);
    return `${minutes} minute(s) and ${seconds} second(s)`;
}

// Toggle the timer on and off
function toggleTimer() {
    timerEnabled = !timerEnabled;
    const toggleButton = document.getElementById('toggleTimerButton');
    toggleButton.textContent = timerEnabled ? 'Disable Timer' : 'Enable Timer';
    if (timerEnabled) {
        startTimer();
    } else {
        startTime = null;
    }
}

// Submit the guess and check it against the target word
function submitGuess() {
    console.log('Submit Guess called');
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    console.log('Guess:', guess);

    if (guess.length !== 6 || !wordList.includes(guess)) {
        alert('Please enter a valid 6-letter word.');
        if(!wordList.includes(guess) && !newWords.includes(guess)){
            newWords.push(guess);
            console.log(newWords);
        }
        return;
    }

    attempts++;
    displayGuess(guess);
    updateKeyboard(guess);
    guessInput.value = '';

    if (guess === targetWord) {
        const timeSpent = getTimeSpent();
        showModal(`Congratulations! You guessed the word in ${attempts} attempts and spent ${timeSpent} solving the puzzle.`);
    }
}

// Display the guess on the board with appropriate coloring
function displayGuess(guess) {
    console.log('Display Guess called');
    const board = document.getElementById('board');
    const row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < 6; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        if (guess[i] === targetWord[i]) {
            tile.classList.add('correct');
        } else if (targetWord.includes(guess[i])) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }

        tile.textContent = guess[i];
        row.appendChild(tile);
    }

    board.appendChild(row);
}

// Play again by resetting the game state
function playAgain() {
    closeModal();
    setTargetWord();
    attempts = 0;
    document.getElementById('board').innerHTML = '';
    document.getElementById('guessInput').value = '';
    resetKeyboard();
    startTimer();
}

// Initialize the game
createKeyboard();
setTargetWord();
startTimer();

// Hide the modal initially
closeModal();
