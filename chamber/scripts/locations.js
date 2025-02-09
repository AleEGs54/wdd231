export default function createLocationsCard(locations){

    //The main container in the dom
    const locationsContainer = document.querySelector('[data-locations-container]');

    locations.forEach(location => {
        //Create the elements

        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const address = document.createElement('address');
        const para = document.createElement('p');
        const button = document.createElement('button');

        //Add te info
        h2.textContent = location.name;
        address.textContent = location.address;
        para.textContent = location.description;
        button.textContent = 'Learn More';

        div.classList.add('event');

        image.setAttribute('src', `${location.image.url}`);
        image.setAttribute('alt', `${location.image.alt}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        //Append the elements
        figure.appendChild(image);

        div.appendChild(h2);
        div.appendChild(figure);
        div.appendChild(address);
        div.appendChild(para);
        div.appendChild(button);

        //appending everything in the ain container
        locationsContainer.appendChild(div);

    });
}