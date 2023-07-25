const cardsTotal = document.getElementById('cards');
const cardsTotalSimilares = document.getElementById('cards__similares');

const busquedaTexto = document.getElementById('busqueda__texto');
const templateCard = document.getElementById('template__card__descripcion').content;
const templateCardSimilares = document.getElementById('template__card__similares').content;
const fragment = document.createDocumentFragment();

busquedaTexto.addEventListener('click', () => {
    document.querySelector('.lupa__busqueda').classList.add('lupa__busqueda-inactivo');
});

busquedaTexto.addEventListener('blur', () => {
    document.querySelector('.lupa__busqueda').classList.remove('lupa__busqueda-inactivo');
});

document.addEventListener('DOMContentLoaded', () => {
    fetchData();

});

const fetchData = async () => {
    try {

        const res = await fetch('../js/products.json');
        const data = await res.json();
        console.log(data);
        pintarCards(data);
        pintarSimilares(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data) => {
    //console.log(data);
    data.forEach(producto => {

        let jason = JSON.parse(localStorage.getItem('idCard'));

        if (jason !== null) {

            if (jason == producto.id) {
                //console.log('hola')
                templateCard.querySelector('h5').textContent = producto.title;
                templateCard.querySelectorAll('p')[0].textContent = producto.price;
                templateCard.querySelectorAll('p')[1].textContent = producto.description;
                templateCard.querySelector('img').setAttribute('src', producto.image);

                const clone = templateCard.cloneNode(true);
                fragment.appendChild(clone);
            }
        }
    });
    cardsTotal.appendChild(fragment);
};

const pintarSimilares = (data) => {
    let jason = JSON.parse(localStorage.getItem('idCard'));
    let contador = 0;
    data.forEach(producto => {

        if (jason == producto.id || contador !== 0) {
            if (contador > 0 && contador <= 5) {

                console.log(contador)
                templateCardSimilares.querySelector('h5').textContent = producto.title;
                templateCardSimilares.querySelector('p').textContent = producto.price;
                templateCardSimilares.querySelector('img').setAttribute('src', producto.image);

                const clone = templateCardSimilares.cloneNode(true);
                fragment.appendChild(clone);
            }
            contador++;
        }

    });
    cardsTotalSimilares.appendChild(fragment);
};