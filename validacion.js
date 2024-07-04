document.querySelector('.formcontato__form').addEventListener('input', function() {
    let nombre = document.querySelector('input[name="nombre"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let asunto = document.querySelector('input[name="asunto"]').value;
    let mensaje = document.querySelector('textarea[name="mensaje"]').value;
    
    let isFormValid = validateField('nombre', nombre) &&
                      validateField('email', email) &&
                      validateField('asunto', asunto) &&
                      validateField('mensaje', mensaje);
    
    let submitButton = document.querySelector('.formcontato__botao');
    if (isFormValid) {
        submitButton.disabled = false;
        submitButton.classList.remove('disabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.add('disabled');
    }
});

document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.querySelector('input[name="nombre"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let asunto = document.querySelector('input[name="asunto"]').value;
    let mensaje = document.querySelector('textarea[name="mensaje"]').value;

    let isValid = validateField('nombre', nombre) &&
                  validateField('email', email) &&
                  validateField('asunto', asunto) &&
                  validateField('mensaje', mensaje);

    if (isValid) {
        // Enviar el formulario
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario, como una petición AJAX
    }
});

function validateField(field, value) {
    let isValid = true;
    let errorMessage = 'No se puede realizar el envio, por favor revise los campos marcados en rojo.';

    switch(field) {
        case 'nombre':
            if (value.trim() === '') {
                isValid = false;
                errorMessage = 'El campo Nombre no debe estar en blanco.';
            } else if (value.length > 50) {
                isValid = false;
                errorMessage = 'El campo Nombre debe contener máximo 50 caracteres.';
            }
            document.getElementById('error-nombre').textContent = errorMessage;
            break;
        case 'email':
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.trim() === '') {
                isValid = false;
                errorMessage = 'El campo E-mail no debe estar en blanco.';
            } else if (!emailPattern.test(value)) {
                isValid = false;
                errorMessage = 'El campo E-mail debe tener un formato válido. Ejemplo: texto@texto.com';
            }
            document.getElementById('error-email').textContent = errorMessage;
            break;
        case 'asunto':
            if (value.trim() === '') {
                isValid = false;
                errorMessage = 'El campo Asunto no debe estar en blanco.';
            } else if (value.length > 50) {
                isValid = false;
                errorMessage = 'El campo Asunto debe contener máximo 50 caracteres.';
            }
            document.getElementById('error-asunto').textContent = errorMessage;
            break;
        case 'mensaje':
            if (value.trim() === '') {
                isValid = false;
                errorMessage = 'El campo Mensaje no debe estar en blanco.';
            } else if (value.length > 300) {
                isValid = false;
                errorMessage = 'El campo Mensaje debe contener máximo 300 caracteres.';
            }
            document.getElementById('error-mensaje').textContent = errorMessage;
            break;
    }

    return isValid;
}