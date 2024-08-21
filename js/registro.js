document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let nombre = document.querySelector('input[name="Nombre"]').value;
    let apellido = document.querySelector('input[name="Apellido"]').value;
    let telefono = document.querySelector('input[name="Telefono"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let contraseña = document.querySelectorAll('input[name="contraseña"]')[0].value;
    let repetirContraseña = document.querySelectorAll('input[name="contraseña"]')[1].value;

    
    if (nombre === "" || apellido === "" || telefono === "" || email === "" || contraseña === "" || repetirContraseña === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

   
    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

   
    let usuario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        contraseña: contraseña
    };

    
    localStorage.setItem(email, JSON.stringify(usuario));

    
    alert("Registro exitoso. ¡Bienvenido, " + nombre + "!");

    
    window.location.href = "./acceder.html";
});
