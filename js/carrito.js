let productoGuardado = localStorage.getItem('producto');

if (productoGuardado) {
    
    let producto = JSON.parse(productoGuardado);

    console.log(producto);

    
    document.querySelector('.carrito .itemProductoCarrito1 img').src = producto.foto;
    document.querySelector('.carrito .itemProductoCarrito1 small').textContent = producto.nombre;
    document.querySelector('.carrito .itemProductoCarrito2 p').textContent = `$${producto.precio}`; 
    
}


