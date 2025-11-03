console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=47kgaWAe7OPAUYv6TmU3XEJwYTzGHEy1&q=yasuo&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
async function getGif() {
    const response = await fetch("https://api.giphy.com/v1/gifs/search");
    const data = await response.json();
    const gif = data.gifs[0];

    const output = document.getElementById("search-input");
    output.textContent = gif;
}

getGif()

const button = document.getElementById("fetch-gif-btn");

button.addEventListener("click", function() {
    getGif();
});
console.log();
let images = [];