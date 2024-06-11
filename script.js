console.log('script.js loaded');

// Select a random word from the word list as the target word
let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log('Target Word:', targetWord); // Log the target word for debugging
let attempts = 0;

// Define the keyboard layout
const keyboardLayout = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
    '←' // Use the actual backspace symbol here
];

// Create the keyboard on the screen
function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
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

// Submit the guess and check it against the target word
function submitGuess() {
    console.log('Submit Guess called');
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    console.log('Guess:', guess);

    if (guess.length !== 6 || !wordList.includes(guess)) {
        alert('Please enter a valid 6-letter word.');
        console.log(`\"${guess}\"\,`);
        return;
    }

    attempts++;
    displayGuess(guess);
    updateKeyboard(guess);
    guessInput.value = '';

    if (guess === targetWord) {
        alert('Congratulations! You guessed the word in ' + attempts + ' attempts.');
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

// Initialize the keyboard
createKeyboard();
