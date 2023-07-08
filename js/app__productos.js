const TotalCategoria = 'categoria__productos';

const cardsTotal = document.getElementById('cards__total');


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
        templateCard.querySelector('.btn__card').dataset.id = producto.id;


        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);



    });
    cardsTotal.appendChild(fragment);

};

/*/
const categoriaMujer = "women's clothing";
const categoriaHombre = "men's clothing";
const categoriaJoya = "jewelery";
const categoriaElectronico = "electronics";

const cardsTotal = document.getElementById('cards__mujer');
const cardsE = document.getElementById('cards__electronic');
const cardsJ = document.getElementById('cards__jewelery');
const cardsH = document.getElementById('cards__men');
const templateCard = document.getElementById('template__card').content;
const fragment = document.createDocumentFragment();

const busquedalupa = document.getElementById('busqueda__lupa');
const busquedaTexto = document.getElementById('busqueda__texto');


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

busquedaTexto.addEventListener('click', () => {
    busquedalupa.classList.add('d-none')
});

busquedaTexto.addEventListener('blur', () => {
    busquedalupa.classList.remove('d-none')
});

const fetchData = async () => {
    try {

        const res = await fetch('./js/products.json');
        const data = await res.json();
        //  console.log(data);
        pintarCards(data);
        pintarCardsE(data);
        pintarCardsJ(data);
        pintarCardsH(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data) => {
    //console.log(data);
    let contador = 0;
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn__card').dataset.id = producto.id;

        if (producto.category === categoriaMujer) {
            contador++;

             if (screen.width < 769) {// el contador se iguala al numero de columnas que se mostraran
                if (contador <= 4) {
                    const clone = templateCard.cloneNode(true);
                    fragment.appendChild(clone);
                }
            }

            else {
                const clone = templateCard.cloneNode(true);
                fragment.appendChild(clone);
            }
        }

    });
    cardsTotal.appendChild(fragment);

};

const pintarCardsE = (data) => {
    //console.log(data);
    let contador = 0;
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn__card').dataset.id = producto.id;

        if (producto.category === categoriaElectronico) {
            contador++;

            if (screen.width < 769) {// el contador se iguala al numero de columnas que se mostraran
               if (contador <= 4) {
                   const clone = templateCard.cloneNode(true);
                   fragment.appendChild(clone);
               }
           }

           else {
               const clone = templateCard.cloneNode(true);
               fragment.appendChild(clone);
           }
        }



    });
    cardsE.appendChild(fragment);
};

const pintarCardsJ = (data) => {
    //console.log(data);
    let contador = 0;
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn__card').dataset.id = producto.id;

        if (producto.category === categoriaJoya) {
            contador++;

            if (screen.width < 769) {// el contador se iguala al numero de columnas que se mostraran
               if (contador <= 4) {
                   const clone = templateCard.cloneNode(true);
                   fragment.appendChild(clone);
               }
           }

           else {
               const clone = templateCard.cloneNode(true);
               fragment.appendChild(clone);
           }
        }

    });
    cardsJ.appendChild(fragment);
};

const pintarCardsH = (data) => {
    //console.log(data);
    let contador = 0;
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn__card').dataset.id = producto.id;

        if (producto.category === categoriaHombre) {
            contador++;

            if (screen.width < 769) {// el contador se iguala al numero de columnas que se mostraran
               if (contador <= 4) {
                   const clone = templateCard.cloneNode(true);
                   fragment.appendChild(clone);
               }
           }

           else {
               const clone = templateCard.cloneNode(true);
               fragment.appendChild(clone);
           }
        }

    });
    cardsH.appendChild(fragment);
};
*/