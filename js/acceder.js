document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

function login() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario === "admin" && contraseña === "admin") {

        Swal.fire({
            title: `Bienvenido ${usuario}`,
            icon: "success"
        }).then(() => {
            window.location.href = "../index.html"
        })
        


    } else {
        Swal.fire({
            title: `Error`,
            text: "Usuario o Contraseña incorrecto",
            icon: "error"
        });
    }
}


