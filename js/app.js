const cards = document.getElementById('cards');
const templateCard = document.getElementById('template__card').content;
const fragment = document.createDocumentFragment();


let carrito = {};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        pintarCards(data);
         console.log(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data) => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.precio;
       

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};