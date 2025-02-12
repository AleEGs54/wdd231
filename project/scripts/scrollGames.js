export default function displayGames(data) {

    const objectLenght = (Object.keys(data).length);

    const main = document.querySelector(".games-catalog");


    let totalIndex = 0

    for (let counter = 1; counter <= 3; counter++) {
        const container = document.querySelector(`.ctr-${counter}`)

        for (let index = 0; index < Math.floor(objectLenght / 3); index++) {

            const image = document.createElement("img");
            const gameName = document.createElement("p");

            gameName.textContent = data[totalIndex].name;
            image.src = `https://img.opencritic.com/${data[totalIndex].images.box.og}`;
            image.width = "200";
            image.height = "300";
            image.alt = gameName;

            container.appendChild(image);
            container.appendChild(gameName);

            main.appendChild(container);

            totalIndex++

        }
    }


}