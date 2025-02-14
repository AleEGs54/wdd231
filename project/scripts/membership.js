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