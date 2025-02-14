export default function displayModal(modalData) {
    const modal = document.querySelector("dialog");

    // Clear previous content in the modal
    modal.innerHTML = "";

    // Create a single close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.classList.add("close-button"); // Optional class for styling

    // Append the close button to the modal
    modal.appendChild(closeButton);

    // Iterate over each legal document (Terms and Conditions, Privacy Policy)
    Object.entries(modalData).forEach(([key, legalData]) => {
        // Create elements for the title and list container
        const h2 = document.createElement("h2");
        const listContainer = document.createElement("ul");

        // Add the title
        h2.textContent = legalData.title;

        // Iterate over the sections and create <li> elements for each section
        legalData.sections.forEach(section => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${section.heading}:</strong> ${section.content}`;
            listContainer.appendChild(listItem);
        });

        // Append the title and list container to the modal
        modal.appendChild(h2);
        modal.appendChild(listContainer);
    });

    // Open the modal
    modal.showModal();

    // Event Listener for the close button
    closeButton.addEventListener("click", () => {
        modal.close();
    });
}