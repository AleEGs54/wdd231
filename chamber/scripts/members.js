const businessCards = document.querySelector('.business-cards');

function displayMembers(members){

    //Using only gold and silver members
    members = members.filter(member => member.membership_level > 1);

    //Use random object to get 3 random members
    members = members.sort(() => 
        
        //This code reorders the array randomly, being half of the array positive and the other half negative because of the 0.5. If the aleatory number (member) is positive, it goes to the end of the array, if negative, to the beginning.
        0.5 - Math.random())
        //then we slice the array to get only the first 3 members out of the 7
        .slice(0, 3);



    //Delete the cards that are already there
    businessCards.innerHTML = '';


    // member card builder here
    members.forEach(member => {
        
        const bCard = document.createElement('section'); //Tis where all te info goes
        const cardHeader = document.createElement('span'); //This is the header of the card
        const cardBody = document.createElement('span'); //This is the body of the card
        const cardContactInfo = document.createElement('div'); //This is the contact info of the card
        const name = document.createElement('h3');
        const tagLine = document.createElement('p');
        const address = document.createElement('p');
        const phoneNumber = document.createElement('p');
        const websiteUrl = document.createElement('p');
        const image = document.createElement('img');
        const membershipLevel = document.createElement('p');
        const description = document.createElement('p');
        const hoursOfOperation = document.createElement('p');

        //Inserting the info
        name.textContent = `${member.name}`;
        tagLine.textContent = `${member.tagline}`;
        tagLine.setAttribute('class', 'tag-line');
        address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
        phoneNumber.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        websiteUrl.innerHTML = `<strong>URL:</strong> <a href="#">${member.website}</a>`;
        image.setAttribute('src', `${member.icon}`);
        image.setAttribute('alt', `${name}'s picture`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '160');
        image.setAttribute('height', '160');
        membershipLevel.setAttribute('class', 'membership-level');
        websiteUrl.setAttribute('href', `${member.website}`);

        //This line says: is membership_level greater than 1? if so, is it greater than 2? if so, display Gold, if not, display Silver, if not, display Member
        membershipLevel.innerHTML = `<strong>MEMBERSHIP LEVEL:</strong> ${(member.membership_level > 1)? (member.membership_level > 2)? 'Gold': 'Silver': 'Member'}`;
        description.textContent = `${member.description}`; 
        hoursOfOperation.textContent = `${member.hours_of_operation}`;

        //Giving the card a class
        bCard.classList.add('b-card');

        //Gold and Silver members have a different class
        if (member.membership_level === 2){
            bCard.classList.add('silver-member');
        } else if (member.membership_level === 3){
            bCard.classList.add('gold-member');
        }


        cardHeader.classList.add('business-card-header');
        cardBody.classList.add('info-business-card');

        //Appending the info to the card
        cardHeader.appendChild(name);
        cardHeader.appendChild(tagLine);
        cardBody.appendChild(image);
        cardContactInfo.appendChild(address);
        cardContactInfo.appendChild(phoneNumber);
        cardContactInfo.appendChild(websiteUrl);
        cardContactInfo.appendChild(membershipLevel);

        //Appending the contact info to the card
        cardBody.appendChild(cardContactInfo);

        //Appending the card to the cards section
        bCard.appendChild(cardHeader);
        bCard.appendChild(cardBody);

        //Appending everithing to the container
        businessCards.appendChild(bCard);
    });
}

export default displayMembers;