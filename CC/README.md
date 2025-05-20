# Currency Converter

This is a lightweight web application that converts amounts between world currencies using real‑time exchange rates. Built as part of an internship project to demonstrate a full‑stack workflow with **Python/Flask**, **HTML**, **CSS**, and **vanilla JavaScript**.

---

## Overview

Users can select a source and target currency, enter an amount, and click **Convert** (or **Reverse**) to see the up‑to‑the‑minute converted value. Since rates are fetched from the free [Exchange Rate API](https://open.er-api.com/), they might differ from the google results. A tooltip help icon explains usage.

---

## Tech Stack

- **Python 3** / **Flask**  

  - `app.py` serves the HTML template and static assets.
  - Uses Flask’s `render_template` and `url_for` for clean routing.
  
- **HTML5**  

  - Semantic structure with `<header>`, `<section>`, `<button>`, etc.
  - Inline **SVG** icons (globe logo, help circle) for crisp scalable graphics.
  
- **CSS3**
  
  - Dark‑theme design, flex‑based layout, responsive up to 600px width.
  - Transitions (`transform`, `background-color`) on hover for interactive feedback.
  - Custom properties (e.g. colors, spacing) kept minimal and consistent.

- **JavaScript (ES6)**  

  - Dynamically populates `<select>` dropdowns with ISO currency codes and symbols.  
  - Uses the **Fetch API** to retrieve JSON data from the exchange‑rates endpoint.  
  - Handles error cases (invalid input, network/API failures) gracefully.  
  - Implements “Reverse” functionality to swap currencies and auto‑convert.

---

## Features

- **Real‑time Rates**: Always uses the latest data from the public API.  
- **Convert & Reverse**: One‑click swap of “From”/“To” currencies.  
- **Tooltip Help**: Click the question‑mark icon to see usage instructions.  
- **Responsive UI**: Adapts from desktop down to mobile screens.  
- **Error Handling**: Validates numeric input and shows user‑friendly messages.

---

## File Structure

currency_converter/
├── app.py # Flask server
├── templates/
│ └── currency_converter.html
├── static/
│ ├── css/
│ │ └── currency_converter.css
│ └── js/
│ └── currency_converter.js
└── README.md # This file


---

## Installation & Running

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ProBuddyHub/MicroIT-1.git
   cd currency-converter

2. **Install Dependencies**  
   ```bash
   pip install flask
   
3. **Run the app**  
   ```bash
   python app.py
   
4. **Open your browser at http://127.0.0.1:5000/**  


**Highlights by Layer**

**Backend (Python / Flask)**

  -  Flask for routing and templating

  -  render_template serves our single-page UI

  -  url_for('static', …) generates correct asset URLs

**Frontend HTML**

  -  Semantic tags and ARIA attributes for accessibility

  -  Inline SVG icons eliminate external dependencies

  -  <select> elements dynamically filled via JS

**Styles (CSS)**

  -  Dark theme: #101820 background with high‑contrast text

  -  Flexbox layouts for input grouping and central alignment

  -  Hover/active transitions for buttons (scale, background-color)

**Client‑side Logic (JS)**

  -  Dropdown population from a static array of ISO codes + symbols

  -  Fetch API for GET https://open.er-api.com/v6/latest/{FROM}

  -  Async/await patterns for clarity and error catching

  -  Result formatting with two‑decimal precision and symbol labels

**Future Improvements**

  -  Rate Caching: Store last‑fetched rates to reduce API calls.

  -  Light/Dark Mode Toggle: User preference persistence.

  -  Extended Currency List: Pull full ISO list from a remote JSON.

  -  Unit Tests: Automated tests for conversion logic and error cases.




