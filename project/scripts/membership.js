import styleNavAndFooter from "./common-scripts.js";

styleNavAndFooter(); //To apply style to the nav and the footer

//Opening the membership cards
//Selecting the svgs
const svgElements = document.querySelectorAll(".arrow");


svgElements.forEach(ele => {

    ele.addEventListener("click", () =>{

        const cardContent = ele.closest('.card').querySelector('.card-content');
        
        // Toggle to show/hide
        cardContent.classList.toggle("visible");


    })

})

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

//timestamp when loading form
document.addEventListener("DOMContentLoaded", () => {

    let dateFormat = {
        timeZone: "America/Denver", // Mountain Time
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false
    };

    let dateMT = new Intl.DateTimeFormat("en-US", dateFormat).format()


    document.querySelector("#timestamp").value = dateMT;
})