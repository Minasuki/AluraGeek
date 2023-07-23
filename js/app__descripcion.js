let datos_existentes = localStorage.getItem('idCard');

const cardsTotal = document.getElementById('cards');

const busquedaTexto = document.getElementById('busqueda__texto');
const templateCard = document.getElementById('template__card__descripcion').content;
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
                console.log('hola')
            templateCard.querySelector('h5').textContent = producto.title;
            templateCard.querySelectorAll('p')[0].textContent = producto.price;
            templateCard.querySelectorAll('p')[1].textContent = producto.description;
            templateCard.querySelector('img').setAttribute('src', producto.image);

                const clone = templateCard.cloneNode(true);
                fragment.appendChild(clone);
            }
        }
    });
//jason = JSON.parse(localStorage.getItem('nuevos')).forEach(


    cardsTotal.appendChild(fragment);

};
