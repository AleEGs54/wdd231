//imports
import createLocationsCard from "./locations.js";
import createHistoricalPlacesCards from "./historicalPlaces.js";




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options

});



//get json info about the cards
const historicalPlaces = 'data/historical-sites.json';

async function getHistoricalData(url) {
    const response = await fetch(url);
    const data = await response.json();

    createHistoricalPlacesCards(data.historical_sites)
    

}

getHistoricalData(historicalPlaces);

//get json info about the cards
const locations = 'data/locations.json';

async function getLocationsData(url) {
    const response = await fetch(url);
    const data = await response.json();

    createLocationsCard(data.locations)


}

getLocationsData(locations);

//Unhide the elements in the dom
const demCardsContainer = document.querySelector('#demographics-cards');
// const expandP = document.querySelector('p.expand');

const demButton = document.querySelector('.dem-button');

demButton.addEventListener('click', () => {

    demButton.classList.toggle('open');


    if (demButton.classList.contains('open')) {
        demButton.innerHTML = `&#8593;`
        // expandP.innerHTML = ``;
        // expandP.innerHTML = `Close article`;
    }
    else {
        demButton.innerHTML = `&#8595;`
        // expandP.innerHTML = ``;
        // expandP.innerHTML = `Open article`;
    }

    demCardsContainer.classList.toggle('open')

});


//Scroll the images in the dom
const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]'); //selecciona el boton, lo usa para encontrar a su padra llamado data-carousel y desde alli hace un query selector a data-slides o a todos los slides

        const activeSlide = slides.querySelector('[data-active]'); //Selecciona al slide activo


        let newIndex = [...slides.children].indexOf(activeSlide) + offset;  //... convierte lo que tenga en un array, cada uno con su propio index y todo
        if (newIndex < 0) newIndex = slides.children.length - 1; //Si el index actual es -1 (osea que pasaste de la imagen con index 0 a -1), toma la longitud del nodo -array- y restale 1 (3-1 = 2) y usa eso como el nuevo index - osea muestra la ultima imagen
        if (newIndex >= slides.children.length) newIndex = 0;// SI pasaste la ultima imagen, vuelve a la primera imagen

        slides.children[newIndex].dataset.active = true; //Da el atributo de 'active' a la siguiente slide
        delete activeSlide.dataset.active; //Le quita 'active' al slide anterior

    })
})

//localStorage
//Get the element from the dom
const messagePara = document.querySelector('#lastVisited');
//Always get the current date
const currentDate = new Date().getTime(); //Time in ms


if (localStorage.getItem('day') !== null) {   

    //Get the day and parse from string to number
    const lastDayVisited = Number(localStorage.getItem('day'));
    //How any days since last visit = today - last day visited
    const timeSinceLastVisit = currentDate - lastDayVisited;

        //If it's been less than a day: back so soon, if not, last visited message
    timeSinceLastVisit < 86400000 ? messagePara.innerHTML = `Back so soon! Awesome!`:  messagePara.innerHTML = `You last visited ${Math.floor(timeSinceLastVisit / 86400000)} days ago`;



} else {
    //User's first time
    localStorage.setItem('day',currentDate);
    messagePara.innerHTML = `Welcome! Let us know if you have any questions.`
}




// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;