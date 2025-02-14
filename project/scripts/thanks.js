import styleNavAndFooter from "./common-scripts.js";

styleNavAndFooter(); //To apply style to the nav and the footer


//getting the info from the url
const urlString = window.location.href;

console.log("url: ", urlString);


//store only the useful part

const userInfo = urlString.split("?")[1].split("&");
console.log(userInfo)

//This function takes a key name and returns the value 
function showInfo(word){

    let value = ""

    userInfo.forEach((element) => {
        if(element.startsWith(word))
        {
             value = element.split("=")[1].replace('%40', '@').replaceAll("+", " ");
        }
        
    })
    //decodeURIComponent devuelve el string con : y . correctamente escritos
    return(decodeURIComponent(value));
}

//Getting the user-info-container

const container = document.querySelector("#user-info-container");

container.innerHTML = `
<p>The following information and the Quote have been send to <strong>${showInfo("email")}</strong>. Please confirm this in the e-mail you will receive from us. Thank you again!</p>

<p> Name: <strong>${showInfo("fname")}</strong> <strong>${showInfo("lname")}</strong></p>
<p>Phone Number : <strong>${showInfo("telephone")}</strong></p>
<p>Type of Membership Selected: <strong>${showInfo("membership-level").toUpperCase()}</strong></p>
<p>Promotional Code: <strong>${showInfo("pCode")}</strong></p>
<p>Time of Submission: <strong>${showInfo("timestamp")}</strong></p>`