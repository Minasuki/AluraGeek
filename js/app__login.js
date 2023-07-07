//const formularioQuerySelecto = document.querySelector('form');

const formulario = document.getElementById('formulario');
const userCorreo = document.getElementById('login__email');
const userContraseña = document.getElementById('login__contraseña');

const btn__entrar = document.getElementById('btn__entrar');

//const alertSuccess = document.getElementById('alertSuccess');
const alertCorreo = document.getElementById('alertCorreo');
const alertContraseña = document.getElementById('alertContraseña');

const regUserCorreo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserContraseña = /[a-z0-9]$/;
/*
const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Mensaje enviado correctamente';
}*/

const pintarMensajeErrores = (errores) => {
    errores.forEach(element => {
        element.tipo.classList.remove('d-none');
        element.tipo.textContent = element.msg;
    });
};

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const errores = [];

    // esto devuelve true si existe solo espacios
    // console.log(!userCorreo.value.trim());

    if (!regUserCorreo.test(userCorreo.value) || !userCorreo.value.trim()) {
        userCorreo.classList.add('is-invalid');
        errores.push({
            tipo: alertCorreo,
            msg: 'Ingresa un correo valido',
        });
    } else {
        userCorreo.classList.remove('is-invalid');
        userCorreo.classList.add('is-valid');
        alertCorreo.classList.add('d-none');
    }

    if (!regUserContraseña.test(userContraseña.value) || !userContraseña.value.trim()) {
        userContraseña.classList.add('is-invalid');
        errores.push({
            tipo: alertContraseña,
            msg: 'Ingresa una contraseña valida',
        });
    } else {
        userContraseña.classList.remove('is-invalid');
        userContraseña.classList.add('is-valid');
        alertContraseña.classList.add('d-none');
    }

    if (errores.length !== 0) {
        pintarMensajeErrores(errores);
        return;
    }

    console.log('Formulario enviado con éxito');

    location.href = '../html/productos.html';

});