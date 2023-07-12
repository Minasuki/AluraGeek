const busquedalupa = document.getElementById('busqueda__lupa');
const busquedaTexto = document.getElementById('busqueda__texto');

const btnAgregar = document.getElementById('btn__agregar');

busquedaTexto.addEventListener('click', () => {
    busquedalupa.classList.add('d-none')
});

busquedaTexto.addEventListener('blur', () => {
    busquedalupa.classList.remove('d-none')
});

document.addEventListener('DOMContentLoaded', () => {
    borrarBoton();
});

/////////////////////////////////////////////////////////////////////////
btnAgregar.addEventListener('click', () => {

    let titulo = document.getElementsByName("titulo")[0].value;
    let url = document.getElementsByName("url")[0].value;
    let precio = document.getElementsByName("precio")[0].value;

    const jason = {
        title: titulo,
        price: precio,
        image: url,
    };

    // localStorage.getItem() devuelve null si la clave no existe
    let datos_existentes = localStorage.getItem('nuevos');
    datos_existentes = datos_existentes === null ? [] : JSON.parse(datos_existentes);

    datos_existentes.push(jason);
    // o
    // datos_existentes.push({tiempo: new Date().getTime(), datos: datosDeCadaEquipoRecuperado});

    localStorage.setItem('nuevos', JSON.stringify(datos_existentes));

    location.href = '../html/productos.html';
});

//'https://media.istockphoto.com/id/184099391/es/foto/servicio-de-toallas.webp?s=2048x2048&w=is&k=20&c=iwtqVPbMG9L5cn2_m7EvzQgbcZjpFzE2IuPzppJP9FI=',
//'https://media.istockphoto.com/id/1153357919/es/foto/calcetines-de-invierno-c%C3%A1lidos-para-ni%C3%B1os-ropa-de-algod%C3%B3n-lindo.webp?s=2048x2048&w=is&k=20&c=SzhDZWd_IXfZsuBboUKp2iGFOsyk5n3Vefs0OSEayBs='
//https://img.freepik.com/foto-gratis/polo-abierto-blanco_125540-1499.jpg?w=900&t=st=1689060245~exp=1689060845~hmac=8d56d8489fb419077ef641a36b41a677a409ab9f3b3c4312edd73544f7a374d3

const borrarBoton = () => {
    busquedaTexto.classList.remove('d-none');
    if (screen.width < 361) {
        busquedaTexto.classList.add('d-none');
        busquedalupa.addEventListener('click', () => {
            busquedaTexto.classList.remove('d-none');
            busquedalupa.classList.add('d-none');
        });
        
        busquedaTexto.addEventListener('blur', () => {
            busquedaTexto.classList.add('d-none');
            busquedalupa.classList.remove('d-none');
        });
    }
}