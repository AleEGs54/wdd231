const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options

});

//Switching between grid and list view
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');
//Cards was already declared in the member section

list.addEventListener('click', function () {
    cards.classList.add('list');
});

grid.addEventListener('click', function () {
    cards.classList.remove('list');
});

// fetching info from data json
const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
    
    // console.table(data.members);
}

const displayMembers = (members) => {
    // member card builder here
    members.forEach(member => {
        
        const card = document.createElement('section'); //Tis where all te info goes
        const name = document.createElement('h2');
        const address = document.createElement('p');
        const phoneNumber = document.createElement('p');
        const websiteUrl = document.createElement('a');
        const image = document.createElement('img');
        const membershipLevel = document.createElement('p');
        const description = document.createElement('p');
        const hoursOfOperation = document.createElement('p');

        //Inserting the info
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `${member.phone}`;
        websiteUrl.textContent = `${member.website}`;
        image.setAttribute('src', `${member.icon}`);
        image.setAttribute('alt', `${name}'s picture`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        membershipLevel.setAttribute('class', 'membershipLevel');
        websiteUrl.setAttribute('href', `${member.website}`);

        //This line says: is membership_level greater than 1? if so, is it greater than 2? if so, display Gold, if not, display Silver, if not, display Member
        membershipLevel.textContent = (member.membership_level > 1)? (member.membership_level > 2)? 'Gold': 'Silver': 'Member';
        description.textContent = `${member.description}`; 
        hoursOfOperation.textContent = `${member.hours_of_operation}`;

        //Giving the card a class
        card.classList.add('card');

        //Appending the info to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);
        card.appendChild(membershipLevel);

        //Appending the card to the cards section
        cards.appendChild(card);
    });
}

getMemberData(url);

// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;