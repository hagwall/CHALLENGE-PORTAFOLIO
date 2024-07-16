// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            alert('Formulario enviado con éxito!');
            form.reset();
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const asunto = document.getElementById('asunto');
        const mensaje = document.getElementById('mensaje');

        let isValid = true;

        if (nombre.value.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            isValid = false;
        }

        if (email.value.trim() === '') {
            alert('Por favor, ingrese su email.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            alert('Por favor, ingrese un email válido.');
            isValid = false;
        }

        if (asunto.value.trim() === '') {
            alert('Por favor, ingrese el asunto.');
            isValid = false;
        }

        if (mensaje.value.trim() === '') {
            alert('Por favor, ingrese su mensaje.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});