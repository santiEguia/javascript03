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
let glutaminaEna = new productosCrear("otros", "Glutamina ENA", "$30.000", 21, "../img/productos/ena-amino.png")
let bcaaEna = new productosCrear("otros", "BCAA ENA", "$45.000", 5, "../img/productos/ena-bcaa.png")
let aminoEna = new productosCrear("otros", "Amino-Acido ENA", "$27.500", 4, "../img/productos/ena-amino.png")
let preentrenoEna = new productosCrear("otros", "Pre-entreno ENA", "$18.000", 8, "../img/productos/ena-pre.png")
let anabolNutrex = new productosCrear("otros", "Anabol Nutrex", "$50.000", 8, "../img/productos/nutrex-anabol.png")
let cafeinaNutrex = new productosCrear("otros", "Caffeine Nutrex", "$32.000", 12, "../img/productos/nutrex-caffeine.png")
let isofitNutrex = new productosCrear("otros", "Isofit Nutrex", "$43.000", 9, "../img/productos/nutrex-isofit.png")
let lipoNutrex = new productosCrear("otros", "Quemador Isofit", "$46.000", 5, "../img/productos/nutrex-lipo.png")
let massNutrex = new productosCrear("otros", "Ganador de masa Nutrex", "$36.000", 10, "../img/productos/nutrex-mass.png")
let outliftNutrex = new productosCrear("otro", "Outlift Nutrex", "$51.000", 14, "../img/productos/nutrex-outlift.png")
let caseinaON = new productosCrear("otros", "Caseina ON", "$65.000", 11, "../img/productos/on-casein.png")
let proteinaHydroOn = new productosCrear("Proteina Hidrolizada", "Proteina ON", "$69.000", 21, "../img/productos/on-hwhey.png")
let proteinaOn = new productosCrear("proteina", "Proteina ON", "$58.000", 20, "../img/productos/on-whey.png")
let shaker1 = new productosCrear("otros", "Shaker", "$14.000", 26, "../img/productos/shaker1.png")
let shaker2 = new productosCrear("otros", "Shaker", "$14.000", 21, "../img/productos/shaker2.png")
let massStarNutrition = new productosCrear("otros", "Ganador de masa Star Nutrition", "$31.000", 18, "../img/productos/star-mass.png")
let nitroWheyStarNutrition = new productosCrear("proteina", "Proteina Nitro Star Nutrition", "$39.000", 12, "../img/productos/star-nitro.jpg")
let preentrenoStarNutrition1 = new productosCrear("otros", "Pre-entreno Ripped Star Nutrition", "$25.000", 22, "../img/productos/star-pre1.png")
let preentrenoStarNutrition2 = new productosCrear("otros", "Pre-entreno V-8 Star Nutrition", "$27.000", 18, "../img/productos/star-pre2.png")
let proteinaStarNutrition = new productosCrear("proteina", "Proteina Star Nutrition", "$25.000", 18, "../img/productos/star-whey.png")

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
