# Password Generator

A web tool that generates strong, random passwords based on your specified criteria. Built with pure **HTML**, **CSS**, and **JavaScript**—no backend required.

---

## Features

- **Custom Length**: Choose any length between 4 and 50 characters.  
- **Character Options**: Include/exclude uppercase, lowercase, numbers, and symbols.  
- **Instant Generation**: Click **Generate Password** to see a new password immediately.  
- **Copy to Clipboard**: One‑click **Copy** button to copy the result.  
- **Responsive Dark Theme**: Clean, centered UI with modern styling.

---

## Tech Stack

- **HTML5**  
  - Number input for length, checkboxes for options, and text input for output.  
- **CSS3**  
  - Dark background (`#121212`), accent colors, and box‑shadow for the container.  
  - Simple, centered layout optimized for desktop and mobile.  
- **JavaScript (ES6)**  
  - Builds a character set based on selected options.  
  - Generates a random password by sampling that set.  
  - Uses `document.execCommand('copy')` to copy text to clipboard.

---

## Usage

1. **Open** `index.html` in your browser.  
2. **Set** the desired password length (4–50).  
3. **Check** the character types you want to include.  
4. **Click** **Generate Password** to create one.  
5. **Click** **Copy** to copy it to your clipboard.

---

