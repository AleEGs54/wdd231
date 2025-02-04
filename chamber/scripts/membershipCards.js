import displayModal from "./displayModal.js";

function createMembershipCard(membershipTypeData){

    const membershipCardsContainer = document.querySelector('.membership-cards');

    membershipTypeData.forEach((data) => {

        //Create the elements
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        const para = document.createElement('p');
        const link = document.createElement('a');

        //Add the info
        h2.textContent = data.mName;
        link.textContent = `Learn more`;
        link.href = '#';
        section.id = data.mType;

        //Append the elements
        para.appendChild(link);

        section.appendChild(h2);
        section.appendChild(para);

        membershipCardsContainer.appendChild(section);
        
        //Event Listener for the link
        link.addEventListener('click', () => {
            displayModal(data);
            });


    });

}

export default createMembershipCard;