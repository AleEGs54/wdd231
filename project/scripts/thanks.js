import styleNavAndFooter from "./common-scripts.js";
styleNavAndFooter(); // To apply style to the nav and the footer

// Getting the info from the URL
const urlString = window.location.href;

// Store only the useful part
const userInfo = urlString.split("?")[1].split("&");

// This function takes a key name and returns the value
function showInfo(word) {
    let value = "";
    userInfo.forEach((element) => {
        if (element.startsWith(word)) {
            value = element.split("=")[1].replace('%40', '@').replaceAll("+", " ");
        }
    });
    // decodeURIComponent returns a string with : and . correctly written.
    return decodeURIComponent(value);
}

// Getting the user-info-container and main elements
const container = document.querySelector("#user-info-container");
const main = document.querySelector("main");
const ordersContainer = document.querySelector(".orders");

// Create an object to store the current quote information
const currentQuote = {
    email: showInfo("email"),
    fname: showInfo("fname"),
    lname: showInfo("lname"),
    telephone: showInfo("telephone"),
    membershipLevel: showInfo("membership-level").toUpperCase(),
    pCode: showInfo("pCode"),
    timestamp: showInfo("timestamp") // This is the timestamp we will compare
};

// Check if there is any previous data in localStorage
let previousQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Function to check if the current timestamp already exists in previous quotes
function isDuplicateQuote(quotes, currentTimestamp) {
    return quotes.some(quote => quote.timestamp === currentTimestamp);
}

// Remove placeholder orders if there are no previous quotes
if (previousQuotes.length === 0) {
    // Clear the placeholder orders
    const placeholderOrders = document.querySelectorAll(".prev-order");
    placeholderOrders.forEach(order => order.remove());

    // Add a message indicating no previous orders
    ordersContainer.innerHTML = `<h3>No Previous Orders From Your Account</h3>`;
}

// First, check if there are previous quotes in localStorage
if (previousQuotes.length > 0) {
    // If there are previous orders, display them in a box on the right side of the page
    const previousOrdersBox = document.createElement("div");
    ordersContainer.innerHTML = "";

    previousQuotes.forEach((quote, index) => {
        previousOrdersBox.innerHTML += `
            <div class="prev-order">
                <p><strong>Order ${index + 1}:</strong></p>
                <p>Name: ${quote.fname} ${quote.lname}</p>
                <p>Email: ${quote.email}</p>
                <p>Membership: ${quote.membershipLevel}</p>
                <p>Timestamp: ${quote.timestamp}</p>
            </div>
        `;
    });

    ordersContainer.appendChild(previousOrdersBox);

    // Now check if the current quote is a duplicate
    if (isDuplicateQuote(previousQuotes, currentQuote.timestamp)) {
        // If the timestamp is a duplicate, reject the new entry
        main.innerHTML = ``; // Clear the main content
        main.innerHTML += `
        <h1>Thank You!</h1>
        <p>This quote has already been submitted. Please do not refresh the page.</p>
        `;
        ordersContainer.innerHTML = "";
    } else {
        // Add the current quote to the localStorage since it's not a duplicate
        previousQuotes.push(currentQuote);
        localStorage.setItem("quotes", JSON.stringify(previousQuotes));

        // Display the current quote information
        container.innerHTML = ``; // Clear the container before adding new content
        container.innerHTML = `
        <p>The following information and the Quote have been sent to <strong>${currentQuote.email}</strong>. Please confirm this in the e-mail you will receive from us. Thank you again!</p>
        <p> Name: <strong>${currentQuote.fname}</strong> <strong>${currentQuote.lname}</strong></p>
        <p>Phone Number: <strong>${currentQuote.telephone}</strong></p>
        <p>Type of Membership Selected: <strong>${currentQuote.membershipLevel}</strong></p>
        <p>Promotional Code: <strong>${currentQuote.pCode}</strong></p>
        <p>Time of Submission: <strong>${currentQuote.timestamp}</strong></p>
        `;
    }
} else {
    // If no previous orders, add the current quote to localStorage
    previousQuotes.push(currentQuote);
    localStorage.setItem("quotes", JSON.stringify(previousQuotes));

    // Display the current quote information
    container.innerHTML = ``; // Clear the container before adding new content
    container.innerHTML = `
    <p>The following information and the Quote have been sent to <strong>${currentQuote.email}</strong>. Please confirm this in the e-mail you will receive from us. Thank you again!</p>
    <p> Name: <strong>${currentQuote.fname}</strong> <strong>${currentQuote.lname}</strong></p>
    <p>Phone Number: <strong>${currentQuote.telephone}</strong></p>
    <p>Type of Membership Selected: <strong>${currentQuote.membershipLevel}</strong></p>
    <p>Promotional Code: <strong>${currentQuote.pCode}</strong></p>
    <p>Time of Submission: <strong>${currentQuote.timestamp}</strong></p>
    `;
}