// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to HTML elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// Function to check the guessed number
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low. Try again.';
    } else {
        message.textContent = 'Too high. Try again.';
    }
}

// Add a click event listener to the button
guessButton.addEventListener('click', checkGuess);
