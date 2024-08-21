let productoGuardado = localStorage.getItem('producto');

if (productoGuardado) {
    
    let producto = JSON.parse(productoGuardado);

    console.log(producto);

    
    document.querySelector('.carrito .itemProductoCarrito1 img').src = producto.foto;
    document.querySelector('.carrito .itemProductoCarrito1 small').textContent = producto.nombre;
    document.querySelector('.carrito .itemProductoCarrito2 p').textContent = `$${producto.precio}`; 
    // Agrega aquí más lógica para actualizar la vista del carrito
}


let productos = []

function productosCrear(tipo, nombre, precio, cantidad, img) {
    this.tipo = tipo
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
    this.img = img
}

let creatinaEna = new productosCrear("creatina", "Creatina ENA", "$24.000", 5, "../img/productos/ena-creatina.png")
let proteinaEna = new productosCrear("proteina", "Proteina ENA", "$20.000", 3, "../img/productos/ena-whey.png")
let barritasIronbar = new productosCrear("otros", "Barritas Iron Bar", "$15.000", 8, "../img/productos/barritas.png")

productos.push(creatinaEna, proteinaEna, barritasIronbar, glutaminaEna, bcaaEna, aminoEna, preentrenoEna, anabolNutrex, cafeinaNutrex, isofitNutrex, lipoNutrex, massNutrex, outliftNutrex, caseinaON, proteinaHydroOn, proteinaOn, shaker1, shaker2, massStarNutrition, nitroWheyStarNutrition, preentrenoStarNutrition1, preentrenoStarNutrition2, proteinaStarNutrition)

let publicacionesContainer = document.querySelector("#publicacionesContainer")
let botonesFiltro = document.querySelectorAll(".botonesFiltro")


function cargarProductos(productos) {
    publicacionesContainer.innerHTML=""
    productos.forEach(producto => {
        
        let card = document.querySelector("template").content.cloneNode(true)

        card.querySelector('img').src = producto.img
        card.querySelector('h5').textContent = producto.nombre
        card.querySelector('small').textContent = producto.precio
        card.querySelector('button').addEventListener("click",()=>{

            let productoInfo = 
                {foto: producto.img,
                nombre: producto.nombre,
                precio: producto.precio}
            

            localStorage.setItem('producto', JSON.stringify(productoInfo))

        })
        

        publicacionesContainer.append(card);
    })
}


cargarProductos(productos)

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesFiltro.forEach(boton => boton.classList.remove("pulsado"));
        e.currentTarget.classList.add("pulsado")

        if (e.currentTarget.id != "todosLosProductos") {
            let tipoElegido = productos.filter(producto => producto.tipo === e.currentTarget.id)
            cargarProductos(tipoElegido)

        } else {


            cargarProductos(productos)
        }
    }
    )
})