const TotalCategoria = 'categoria__productos';

const cardsTotal = document.getElementById('cards__total');

const productosBtn = document.getElementById('productos__btn');

const busquedalupa = document.getElementById('busqueda__lupa');
const busquedaTexto = document.getElementById('busqueda__texto');
const templateCard = document.getElementById('template__card').content;
const fragment = document.createDocumentFragment();

busquedaTexto.addEventListener('click', () => {
    busquedalupa.classList.add('d-none')
});

busquedaTexto.addEventListener('blur', () => {
    busquedalupa.classList.remove('d-none')
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
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    });
    cardsTotal.appendChild(fragment);

};

productosBtn.addEventListener('click',()=>{

    location.href = '../html/agregarProducto.html';
});