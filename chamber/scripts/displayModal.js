export default function displayModal(modalData) {
    const modal = document.querySelector("dialog");

    //Set it to empty
    modal.innerHTML = "";

    //Create the elements
    const closeButton = document.createElement("button");
    const h3 = document.createElement("h3");
    const description = document.createElement("p");
    const listContainer = document.createElement("ul");

    modalData.features.forEach((feature) => {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        listContainer.appendChild(listItem);
    });

    //Add the info
    closeButton.textContent = "❌";
    h3.textContent = modalData.mName;
    description.textContent = modalData.about;
    

    //Append the elements
    modal.appendChild(closeButton);
    modal.appendChild(h3);
    modal.appendChild(description);
    modal.appendChild(listContainer);
    

    //Open the modal
    modal.showModal();

    //Event Listener for the close button
    closeButton.addEventListener("click", () => {
        modal.close();
    });


}