
let carrito = [];
let comprar = document.querySelectorAll('.product__btn')

comprar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const idProducto = parseInt(boton.getAttribute('data-id'))

        const product = productos.find((p) => p.id === idProducto);

        if (product) {
            carrito.push(product);
            console.log(carrito);
        } else {
            console.log('Producto no encontrado');

        }
    })


})