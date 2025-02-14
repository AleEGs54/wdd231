import styleNavAndFooter from "./common-scripts.js";
import displayModal from "./displayModal.js";

styleNavAndFooter(); //To apply style to the nav and the footer

//Opening the membership cards
//Selecting the svgs
const svgElements = document.querySelectorAll(".arrow");


svgElements.forEach(ele => {

    ele.addEventListener("click", () =>{

        // const cardContent = ele.closest('.card').querySelector('.card-content');
        const ul = ele.closest('.card').querySelector('ul');
        
        // Toggle to show/hide
        // cardContent.classList.toggle("visible");
        ul.classList.toggle("visible");


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

// Llama a esta función después de cargar los datos
async function loadAndRenderLegalData() {
    try {
      const response = await fetch('data/legal-data.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log(data);
      renderLegalData(data);
    } catch (error) {
      console.error("Error loading legal data:", error);
    }
  }
  
  // Llama a la función cuando el script se carga
  loadAndRenderLegalData();

//Displaying the modal
function renderLegalData(data){

    const tyc = document.querySelector(".terms");
    
    tyc.addEventListener("click", () => {
        displayModal(data);
    })

}