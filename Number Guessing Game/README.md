# Number Guessing Game

A simple browser‑based game where the player has 10 attempts to guess a randomly generated number between 1 and 100. Built with **HTML**, **CSS**, and **vanilla JavaScript**, it provides instant feedback (“Too low”, “Too high”, or “Correct!”) and tracks remaining attempts.

---

## Features

- **Random Number Generation**: Picks an integer in `[1…100]` on page load or reset.  
- **10 Attempts**: Player has up to 10 guesses per round.  
- **Instant Feedback**: Messages indicate “Too low”, “Too high”, or “Correct!” in real time.  
- **Game Over**: Disables input when attempts run out or the guess is correct.  
- **Play Again**: “Play Again” button resets the game state and picks a new secret number.  
- **Responsive, Dark‑themed UI**: Clean look that works on desktop and mobile.

---

## Tech Stack

- **HTML5** – semantic markup, `<input type="number">` for guesses.  
- **CSS3** – dark background (`#121212`), gold highlights (`#ffd700`), simple flex‑centered layout.  
- **JavaScript (ES6)** –  
  - `Math.random()` for number generation  
  - DOM methods (`getElementById`, `addEventListener`) for interaction  
  - Inline feedback and attempt counter updates  
  - Clean separation of game logic (`handleGuess`, `endGame`, `resetGame`)

---

## How to Run

1. Clone or download this repository.  
2. Open `number_guessing.html` in any modern web browser.  
3. Enter your guess (1–100) and click **Guess** (or press Enter).  
4. Follow on‑screen feedback and try again up to 10 times.  
5. Click **Play Again** to start a new game.

---


