import styleNavAndFooter from "./common-scripts.js";

styleNavAndFooter(); //To apply style to the nav and the footer


//Scroll the images in the dom
const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]'); //selecciona el boton, lo usa para encontrar a su padra llamado data-carousel y desde alli hace un query selector a data-slides o a todos los slides

        const activeSlide = slides.querySelector('[data-active]'); //Selecciona al slide activo


        let newIndex = [...slides.children].indexOf(activeSlide) + offset;  //... convierte lo que tenga en un array, cada uno con su propio index y todo
        if (newIndex < 0) newIndex = slides.children.length - 1; //Si el index actual es -1 (osea que pasaste de la imagen con index 0 a -1), toma la longitud del nodo -array- y restale 1 (3-1 = 2) y usa eso como el nuevo index - osea muestra la ultima imagen
        if (newIndex >= slides.children.length) newIndex = 0;// SI pasaste la ultima imagen, vuelve a la primera imagen

        slides.children[newIndex].dataset.active = true; //Da el atributo de 'active' a la siguiente slide
        delete activeSlide.dataset.active; //Le quita 'active' al slide anterior

    })
})