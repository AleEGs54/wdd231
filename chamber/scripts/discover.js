const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options

});

//Unhide the elements in the dom
const demCardsContainer = document.querySelector('#demographics-cards');
const demCards = document.querySelectorAll('.hide'); //Selecting all the demo-cards that have a class of unhide
const demButton = document.querySelector('.dem-button');

demButton.addEventListener('click', () =>
    {

        demButton.classList.toggle('open');

        
        if (demButton.classList.contains('open'))
        {
            demButton.innerHTML = `Activo`
        } 
        else{
            demButton.innerHTML = `Inactivo`
        }

        demCardsContainer.classList.toggle('open')

    });
    
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;