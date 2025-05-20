const currencyList = ["USD", "EUR", "INR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SGD"];

const currencySymbols = {
    "USD": "$",
    "EUR": "€",
    "INR": "₹",
    "JPY": "¥",
    "GBP": "£",
    "AUD": "A$",
    "CAD": "C$",
    "CHF": "CHF",
    "CNY": "¥",
    "SGD": "S$"
};

// DOM Elements
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultText = document.getElementById("resultText");
const convertBtn = document.getElementById("convertBtn");

// Populate currency dropdowns
function populateCurrencies() {
    currencyList.forEach(currency => {
        const symbol = currencySymbols[currency] || "";

        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = `${currency} (${symbol})`;

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = `${currency} (${symbol})`;

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "INR";
}

// Fetch and convert currency using API
async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultText.textContent = "Please enter a valid amount.";
        return;
    }

    const apiUrl = `https://open.er-api.com/v6/latest/${from}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.result === "success" && data.rates[to]) {
            const rate = data.rates[to];
            const converted = (rate * amount).toFixed(2);
            resultText.textContent = `${amount} ${from} (${currencySymbols[from]}) = ${converted} ${to} (${currencySymbols[to]})`;
        } else {
            resultText.textContent = "Exchange rate not available.";
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        resultText.textContent = "Error fetching real-time exchange rates.";
    }
}

// Event listeners
populateCurrencies();
convertBtn.addEventListener("click", convertCurrency);

window.addEventListener("load", () => {
    feather.replace();
});

const reverseBtn = document.getElementById("reverseBtn");

reverseBtn.addEventListener("click", () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    // Trigger the conversion immediately after reverse
    convertCurrency();
});

