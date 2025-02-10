export default function styleNavAndFooter() {

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('#animateme');

    hamButton.addEventListener('click', function () {
        hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
        navigation.classList.toggle('open'); //This is to display (as block) the menu options

    });

    // Select the DOM elements for output
    const currentyear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    // store the current date in a variable
    const today = new Date();

    // writing the date
    currentyear.innerHTML = `${today.getFullYear()}`;
    lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

}