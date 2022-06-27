// Events
// 1. silencing the default features - reloading

document.addEventListener('DOMContentLoaded', (stopDefault) => {
    stopDefault.preventDefault()
    console.log(stopDefault.target)
})

// 2. Adding an alert to the home pafe button

// document.getElementsByClassName("btn").addEventListener("click", myFunction);

// function myFunction() {
//     alert("Hello Welcome!");
// }

// All renders

function renderAll(get1) {

    let card = document.createElement("ul")
    card.innerHTML =
        `
    <p>${get1.description} - <span> ${get1.source}</span></p> <br>
    `
    document.querySelector("#populate").appendChild(card)

}


function renderGal(get2) {

    let gal = document.createElement('p')
        //  GAllery
    gal.innerHTML =
        `
        <div class = "galShow">
            <img src=${get2.thumbnail} alt="">
        
            <p>${get2.description}</p>
        </div>
        `

    document.querySelector(".list").appendChild(gal)
}


//  Fetching all dishes
function getAllQuotes() {
    fetch('https://chefcula.herokuapp.com/quotes')
        .then(res => res.json())
        .then(dishData => dishData.forEach(get1 => renderAll(get1)))
}

function getAllGal() {
    fetch('https://chefcula.herokuapp.com/gallery')
        .then(res => res.json())
        .then(dishData => dishData.forEach(get2 => renderGal(get2)))
}




// All initializations

function initialize() {
    getAllQuotes()
    getAllGal()

}

initialize()