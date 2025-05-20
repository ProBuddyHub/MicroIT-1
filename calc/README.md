# Calculator with Real‑Time Result

A simple, responsive web‑based calculator with real‑time preview of the computed result and a toggleable light/dark theme. Built using **Flask** for serving the page and pure **HTML/CSS/JavaScript** on the frontend.

---

## Features

- **Basic Operations**: Addition, subtraction, multiplication, division, decimals  
- **Real‑Time Preview**: Shows the current evaluated result as you type  
- **Keyboard Support**: Use digits, operators, Enter (calculate), Backspace (delete), Escape (clear)  
- **Light/Dark Mode Toggle**: Switch themes on the fly  
- **Responsive Layout**: Fits desktops and mobile screens  

---

## Tech Stack

- **Backend**  
  - **Python 3** + **Flask** (`app.py`)  
    - Serves `index.html` at `/`  
    - `render_template` and `app.run(debug=True)` for easy development  

- **Frontend**  
  - **HTML5** (`templates/index.html`)  
    - Semantic structure, `<input>` for display, `<button>` grid  
  - **CSS3** (inline in `<style>`)  
    - Dark theme by default, light theme via `.light-mode` class  
    - Grid layout for buttons, transitions on focus/hover  
  - **JavaScript (ES6)** (inline in `<script>`)  
    - `insert()`, `calculate()`, `updateRealtimeResult()`, `clearDisplay()`, `backspace()`  
    - `eval()` for expression parsing (with `try/catch` for errors)  
    - `keydown` listener for full keyboard support  
    - Theme toggle using `classList.toggle('light-mode')`  

---

## File Structure

calculator/
├── app.py
├── templates/
│ └── index.html
└── README.md

## Installation & Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ProBuddyHub/MicroIT-1.git
   cd MicroIT-1/calculator

## Install Flask

2. ```bash
   pip install flask
   
## Start the server

3. ```bash
   python app.py
   
## Installation & Run

4. **Open http://127.0.0.1:5000/ in your browser.**  

