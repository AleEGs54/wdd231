const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');


async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    // console.table(data.prophets);
    
    // note that we reference the prophets array of the JSON data object, not just the object
    displayProphets(data.prophets) 
    
}

const displayProphets = (prophets) => {
    //card build code goes here
    
    prophets.forEach(prophet => {
        
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src',`${prophet.imageurl}`);
        portrait.setAttribute('alt',`${fullName}'s picture - President number ${prophet.order} of the Church of Jesus Christ of Latter-days Saints`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}



getProphetData(url);