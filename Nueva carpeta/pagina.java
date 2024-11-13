document.getElementById('formRegistro').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Validación de correo
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault();
    }

    // Validación de contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        event.preventDefault();
    }
});
