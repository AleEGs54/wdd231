export default function createHistoricalPlacesCards(places) {
    //The main container in the dom
    const carousel = document.querySelector('[data-carousel]');

    const ul = document.createElement('ul');

    ul.setAttribute('data-slides', '');

    let i = 0;

    places.forEach(place => {
        //Create the elements

        const li = document.createElement('li');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const para = document.createElement('p');
        const location = document.createElement('p');

        //Add te info
        h3.textContent = place.name;
        location.innerHTML = `Location: ${place.location}`;
        para.textContent = place.description;

        //attributes and classes
        image.setAttribute('src', `${place.image.url}`);
        image.setAttribute('alt', `${place.image.alt}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');
        image.setAttribute('loading', 'lazy');
        li.classList.add('slide');

        //If this is the first iteration, set the li as the current active card
        i == 0? li.setAttribute('data-active',''): null

        //Append the elements
        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(para);
        li.appendChild(location);

        //appending everything in the main container
        ul.appendChild(li);

        
        i += 1;
        
    })
    

    carousel.appendChild(ul);
}