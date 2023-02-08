// write your code here
const baseURL = "http://localhost:3000/ramens"
const ramenMenuDiv = document.getElementById("ramen-menu");
const ramenImage = document.createElement("img");

fetch(baseURL)
    .then((res) => res.json())
    .then(ramens => renderRamens(ramens));

function renderRamens(ramens) {
    console.log(ramens)
    ramens.forEach(renderRamen)
}

function renderRamen(ramen) {
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);
}

