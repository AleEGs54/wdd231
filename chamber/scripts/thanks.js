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
             value = element.split("=")[1].replace('%40', '@');
        }
        
    })
    return(value);
}

//Getting the user-info-container

const container = document.querySelector("#user-info-container");

container.innerHTML = `
<h2>Personal Info</h2>
<p> Name: ${showInfo("fname")} ${showInfo("lname")}</p>
<p>Phone Number : ${showInfo("telephone")}</p>
<p>E-mail ${showInfo("email")}</p>
<h2>Business Info</h2>
<p>Business/Organization's Name: ${showInfo("Bname")}</p>
<p>Applicant's title in the business: ${showInfo("title")}</p>






`