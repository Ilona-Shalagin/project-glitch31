const inputSearch = document.querySelector("#submit");
const books = document.querySelectorAll(".book");

inputSearch.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

books.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display= "none" );
    console.log(item);
})
})
