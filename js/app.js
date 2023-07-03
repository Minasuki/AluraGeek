const categoriaMujer = "women's clothing";
const categoriaHombre = "men's clothing";
const categoriaJoya = "jewelery";
const categoriaElectronico = "electronics";

const cardsMujer = document.getElementById('cards__mujer');
const cardsE = document.getElementById('cards__electronic');
const cardsJ = document.getElementById('cards__jewelery');
const cardsH = document.getElementById('cards__men');
const templateCard = document.getElementById('template__card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('./js/products.json');
        const data = await res.json();
        //  console.log(data);
        pintarCardsM(data);
        pintarCardsE(data);
        pintarCardsJ(data);
        pintarCardsH(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsM = (data) => {
    //console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        if (producto.category === categoriaMujer) {
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }

    });
    cardsMujer.appendChild(fragment);
};

const pintarCardsE = (data) => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        if (producto.category === categoriaElectronico) {
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }

    });
    cardsE.appendChild(fragment);
};

const pintarCardsJ = (data) => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        if (producto.category === categoriaJoya) {
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }

    });
    cardsJ.appendChild(fragment);
};

const pintarCardsH = (data) => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        if (producto.category === categoriaHombre) {
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }

    });
    cardsH.appendChild(fragment);
};