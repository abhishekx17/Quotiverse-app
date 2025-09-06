const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.getElementById("new-quote");
const copy = document.getElementById("copy");
const quoteBox = document.querySelector(".quote-box");

const apiUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "qUUXVNsNxubYBN3yLlPIYA==cTXx6WpIhLuiYBxk";

async function getQuote() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey
            }
        });

        const data = await response.json();
        const quoteData = data[0]; 

        quote.textContent = quoteData.quote;
        author.textContent = `${quoteData.author}`;
    } catch (error) {
        quote.textContent = "Failed to load quote";
        author.textContent = "";
        console.error("Error fetching quote:", error);
    }
}

button.addEventListener("click", getQuote);

copy.addEventListener("click", () => {
    const text = `${quote.textContent} ${author.textContent}`;
    navigator.clipboard.writeText(text);
    copy.textContent = "copied!";

    setTimeout(() => {
        copy.textContent = "copy";
    }, 2000);
});

getQuote();
