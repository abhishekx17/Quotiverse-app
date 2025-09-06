const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.getElementById("new-quote");
const copy = document.getElementById("copy");
const categorySelect = document.getElementById("category");
quoteBox = document.querySelector(".quote-box")



async function getquote() {
    let category = categorySelect.value;
    let url = "https://api.quotable.io/quotes/random";

    if (category === "happiness") {
        url = "https://api.quotable.io/quotes/random?tags=love|happiness";
    } else if (
        category === "technology") {
        url = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";

    } else if (category !== "random") {
    } else if (
        category === "history") {
        url = "https://api.quotable.io/quotes/random?tags=history|civil-rights";
    } else if (category !== "random") {
        url += `?tags=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    const quoteData = Array.isArray(data) ? data[0] : data;

    quote.textContent = `${quoteData.content}`;
    author.textContent = `– ${quoteData.author}`;

}

button.addEventListener("click", getquote);


copy.addEventListener("click", () => {
    const text = `${quote.textContent} ${author.textContent}`;
    navigator.clipboard.writeText(text);
    copy.textContent = "copied!";

    setTimeout(() => {
        copy.textContent = "copy";
    }, 2000);
})

getquote();

