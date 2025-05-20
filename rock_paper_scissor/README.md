# Rock‑Paper‑Scissors Game

A simple, standalone browser game of Rock‑Paper‑Scissors built with **pure HTML**, **CSS**, and **vanilla JavaScript**—no backend required.

---

## Overview

Players click one of three buttons—🪨 Rock, 📄 Paper, or ✂️ Scissors—to compete against a computer opponent that selects randomly. The page displays instant results (“You win!”, “You lose!”, or “Draw”), and tracks cumulative scores for both the player and the computer.

---

## Features

- **Three Choices**: Rock, Paper, Scissors buttons with intuitive emojis.  
- **Instant Feedback**: Text result updates immediately after each round.  
- **Score Tracking**: Persistent counters for user and computer.  
- **Responsive Design**: Simple layout adapts to mobile and desktop.  
- **No Dependencies**: Uses only built‑in browser technologies.

---

## Tech Stack

- **HTML5**  
  - Semantic document structure, `<button>` elements for choices.  
- **CSS3**  
  - Linear‑gradient background, modern font (`Segoe UI`), and hover transitions on buttons.  
  - Flexbox and margin utilities for centering and spacing.  
- **JavaScript (ES6)**  
  - `getComputerChoice()` picks a random choice.  
  - `playGame(userChoice)` contains the game logic and updates the DOM.  
  - Score variables (`userScore`, `compScore`) maintained in script scope.

---

## Usage

1. **Open** `index.html` in your web browser.  
2. **Click** one of the Rock, Paper, or Scissors buttons.  
3. **Read** the result message and watch the score update.  
4. **Play** as many rounds as you like—the scores will accumulate.

---

