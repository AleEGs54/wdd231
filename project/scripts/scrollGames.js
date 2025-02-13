export default function displayGames(data) {

    const objectLenght = (data.games.length);

    const main = document.querySelector(".games-catalog");


    for (let times = 0; times < 3; times++) {
        let totalIndex = 0

        for (let counter = 1; counter <= 3; counter++) {
            const container = document.querySelector(`.ctr-${counter}`)
            // container.innerHTML = "";


            for (let index = 0; index < Math.floor(objectLenght / 3); index++) {

                const image = document.createElement("img");

                image.src = `${data.games[totalIndex].image}`;
                image.width = "200";
                image.height = "300";
                image.alt = data.games[totalIndex].name;
                image.loading = "lazy";
                container.classList.add("game");

                container.appendChild(image);

                main.appendChild(container);


                totalIndex++;
            }

        }
    }


}