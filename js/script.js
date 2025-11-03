console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

let images = [];

button.addEventListener("click", async () => {

    const query = searchInput.value.trim();

    if (!query) {
        alert ("Please enter a search term.");
        return;
    }

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=47kgaWAe7OPAUYv6TmU3XEJwYTzGHEy1&q=${encodeURIComponent(query)}&limit=25&offset=0&rating=g&lang=en`;

    const response = await fetch(endpoint);
    const data = await response.json();

    images = data.data.map(gif => gif.images.original.url);

    console.log(images); 

    gifContainer.innerHTML = "";

    for (let url of images) {
        gifContainer.innerHTML += `
             <img src="${url}" class="col-3 mb-3" alt="${query} gif">
        `;
    }
});
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // stop form submissions (if any)
        button.click(); // pretend the button was clicked
    }
});