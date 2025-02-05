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
<h2>Personal Info</h2>
<p> Name: <strong>${showInfo("fname")}</strong> <strong>${showInfo("lname")}</strong></p>
<p>Phone Number : <strong>${showInfo("telephone")}</strong></p>
<p>E-mail <strong>${showInfo("email")}</strong></p>
<h2>Business Info</h2>
<p>Business/Organization's Name: <strong>${showInfo("Bname")}</strong></p>
<p>Applicant's title in the business: <strong>${showInfo("title").toUpperCase()}</strong></p>
<p>Type of Membership: <strong>${showInfo("membership-level")}</strong></p>
<p>Business description: <strong>${showInfo("description")}</strong></p>






`