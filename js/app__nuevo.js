const busquedalupa = document.getElementById('busqueda__lupa');
const busquedaTexto = document.getElementById('busqueda__texto');

busquedaTexto.addEventListener('click', () => {
    busquedalupa.classList.add('d-none')
});

busquedaTexto.addEventListener('blur', () => {
    busquedalupa.classList.remove('d-none')
});
