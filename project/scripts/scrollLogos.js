export default function displayLogos(data){
    //take the container
    const container = document.querySelector('.container-track');

    for (let index = 0; index < 2; index++) { //The cards must be created twice.
        
        
        
        //Go through the array
        data.forEach(brand => {
            
            //Create the elements
            const div = document.createElement('div');
            const image = document.createElement('img');
            const para = document.createElement('p');
            
            //Add clases and attributes
            div.classList.add('slide');
            image.setAttribute('src',`https://img.opencritic.com/${brand.imageSrcV2}`);
            image.setAttribute('alt', `${brand.name}`);
            image.setAttribute('width', '250'); //Images are 1x1
            image.setAttribute('height', '250');
            para.innerHTML = `${brand.name}`;
            
            //Add data
            
            //Append to the father
            div.appendChild(image);
            div.appendChild(para);
            container.appendChild(div);
        });
    }
}
