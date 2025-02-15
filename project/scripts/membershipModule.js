export function displayMembershipCards(data) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = ''; // Limpiar el contenido previo

    data.forEach(item => {
        // Crear elementos
        const card = document.createElement('section');
        const title = document.createElement('h3');
        const description = document.createElement('strong');
        const ul = document.createElement('ul');
        const priceLi = document.createElement('li');
        const priceH4 = document.createElement('h4');
        const priceP = document.createElement('p');
        const priceSpan = document.createElement('span');
        const detailsLi = document.createElement('li');
        const detailsUl = document.createElement('ul');
        const detailsLiInner = document.createElement('li');
        const getPlanBtn = document.createElement('a');

        // Asignar datos y clases/atributos
        card.className = `card ${item.type}`;
        title.textContent = item.title;
        description.textContent = item.description;
        priceH4.textContent = 'Price:';
        priceSpan.className = 'price';
        priceSpan.textContent = item.price;
        detailsLiInner.textContent = item.details;
        getPlanBtn.href = 'https://aleegs54.github.io/wdd231/project/membership.html';
        getPlanBtn.className = 'get-plan-btn';
        getPlanBtn.textContent = 'Get Plan';

        if (item.type === 'basic') {
            const popularBadge = document.createElement('div');
            popularBadge.className = 'popular';
            popularBadge.textContent = '👾 Most Popular';
            card.appendChild(popularBadge);
        } else if (item.type === 'advanced') {
            const recommendedBadge = document.createElement('div');
            recommendedBadge.className = 'recommended';
            recommendedBadge.textContent = '⭐️ Recommended';
            card.appendChild(recommendedBadge);
        }

        if (item.per) {
            const perSpan = document.createElement('span');
            perSpan.textContent = item.per;
            priceP.appendChild(perSpan);
        }

        if (item.previousPrice) {
            const em = document.createElement('em');
            em.textContent = ` previously ${item.previousPrice}`;
            priceP.appendChild(em);
        }

        if (item.additionalPrice) {
            const additionalLi = document.createElement('li');
            additionalLi.textContent = item.additionalPrice;
            detailsUl.appendChild(additionalLi);
        }

        // Anidar elementos
        priceP.appendChild(priceSpan);
        priceLi.appendChild(priceH4);
        priceLi.appendChild(priceP);
        ul.appendChild(priceLi);

        detailsUl.appendChild(detailsLiInner);
        detailsLi.appendChild(detailsUl);
        ul.appendChild(detailsLi);

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(ul);
        card.appendChild(getPlanBtn);

        container.appendChild(card);
    });
}