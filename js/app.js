const cards = document.getElementById('cards');
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
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data) => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        //templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};