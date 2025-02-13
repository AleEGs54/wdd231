export default function displayGames(data) {

    const objectLenght = (Object.keys(data).length);

    const main = document.querySelector(".games-catalog");


    for (let times = 0; times < 2; times++) {
        let totalIndex = 0

        for (let counter = 1; counter <= 3; counter++) {
            const container = document.querySelector(`.ctr-${counter}`)
            // container.innerHTML = "";


            for (let index = 0; index < Math.floor(objectLenght / 3); index++) {

                const image = document.createElement("img");

                image.src = `https://img.opencritic.com/${data[totalIndex].images.box.og}`;
                image.width = "200";
                image.height = "300";
                image.alt = data[totalIndex].name;
                container.classList.add("game");

                container.appendChild(image);

                main.appendChild(container);


                totalIndex++;
            }

        }
    }


}