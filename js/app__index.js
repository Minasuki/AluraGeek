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

const busquedaTexto = document.getElementById('busqueda__texto');
const btnLogin = document.getElementById('btn__login');
//const cards = document.querySelector('.roww');

const btnVerTodo = [...document.querySelectorAll('.btn__Ver__todo')];
const cardsTodo = [...document.querySelectorAll('.roww')];

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

busquedaTexto.addEventListener('click', () => {
    document.querySelector('.lupa__busqueda').classList.add('lupa__busqueda-inactivo');
});

busquedaTexto.addEventListener('blur', () => {
    document.querySelector('.lupa__busqueda').classList.remove('lupa__busqueda-inactivo');
});

cardsTodo.forEach(valor => {
    valor.addEventListener('click', (e) => {
        addCarrito(e);
    });
});

btnVerTodo.forEach(valor => {
    valor.addEventListener('click', () => {
        location.href = '/html/login.html';
    });
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
        borrarBoton();
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

const addCarrito = (e) => {
    //  console.log(e.target);
    //  console.log(e.target.classList.contains('btn'));
    if (e.target.classList.contains('btn__card')) {
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
};

let valorId;

const setCarrito = objeto => {

    const productoID = {
        id: objeto.querySelector('.btn__card').dataset.id,
        // title: objeto.querySelector('h5').textContent,
        // precio: objeto.querySelector('p').textContent,
        // cantidad: 1,
    }
    valorId = productoID.id;
    console.log(valorId);
    localStorage.setItem('idCard', JSON.stringify(valorId));
};


const borrarBoton = () => {

    let ancho = window.innerWidth;
    console.log(ancho);

    if (ancho < 385) {

        busquedaTexto.classList.add('d-none');
        busquedalupa.addEventListener('click', () => {
            busquedaTexto.classList.remove('d-none');
            btnLogin.classList.add('d-none');
            busquedalupa.classList.add('d-none');
        });

        busquedaTexto.addEventListener('blur', () => {
            busquedaTexto.classList.add('d-none');
            btnLogin.classList.remove('d-none');
            busquedalupa.classList.remove('d-none');
        });
    }


}
