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

const busquedalupa = document.getElementById('busqueda__lupa');
const busquedaTexto = document.getElementById('busqueda__texto');


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})


// if (screen.width < 769) {
//     contadorWidth = 4;
//     console.log('hola');
//     if (screen.width < 361) {
//         console.log('hola x2');
//         contadorWidth = 2;
//     }
// }


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
    let contador = 0;
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute('src', producto.image);
        templateCard.querySelector('.btn__card').dataset.id = producto.id;




        if (producto.category === categoriaMujer) {
            contador++;

            if (screen.width < 361) {// el contador se iguala al numero de columnas que se mostraran
                if (contador <= 2) {
                    const clone = templateCard.cloneNode(true);
                    fragment.appendChild(clone);
                }
            }

            else if (screen.width < 769) {
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
    cardsMujer.appendChild(fragment);

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

            if (screen.width < 361) {// el contador se iguala al numero de columnas que se mostraran
                if (contador <= 2) {
                    const clone = templateCard.cloneNode(true);
                    fragment.appendChild(clone);
                }
            }

            else if (screen.width < 769) {
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

            if (screen.width < 361) {// el contador se iguala al numero de columnas que se mostraran
                if (contador <= 2) {
                    const clone = templateCard.cloneNode(true);
                    fragment.appendChild(clone);
                }
            } else {
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

            if (screen.width < 361) {// el contador se iguala al numero de columnas que se mostraran
                if (contador <= 2) {
                    const clone = templateCard.cloneNode(true);
                    fragment.appendChild(clone);
                }
            } else {
                const clone = templateCard.cloneNode(true);
                fragment.appendChild(clone);
            }

        }

    });
    cardsH.appendChild(fragment);
};

// const loadindData = estado => {
//     const loading = document.getElementById('busqueda__lupa');
//     if (estado) {
//         loading.classList.remove('d-none');
//     } else {
//         loading.classList.add('d-none');
//     }
// };



/*
 document.getElementById("nav-links").className += "";

Si lo que quieres es quitarle la clase deberias hacer:

if (screen.width < 801) {
document.getElementById("nav-links").className += "overlay-menu";
} else {
document.getElementById("nav-links").classList.remove("overlay-menu");
}

*/