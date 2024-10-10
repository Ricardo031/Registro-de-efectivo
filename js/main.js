const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modal-container');

let carrito = [];
let comprar = document.querySelectorAll('.product__btn');

comprar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const idProducto = parseInt(boton.getAttribute('data-id'));
        const product = productos.find((p) => p.id === idProducto);

        if (product) {
            carrito.push(product);
            console.log(carrito);
        } else {
            console.log('Producto no encontrado');
        }
    });
});

verCarrito.addEventListener('click', () => {
    // Limpiar el contenido del modal antes de mostrar el nuevo contenido
    modalContainer.innerHTML = '';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement('h1');
    modalButton.innerText = 'X';
    modalButton.className = 'modal-header-button';
    //* boton X para quitar el modal
    modalButton.addEventListener('click', () => {
        modalContainer.classList.remove('active'); // Oculta la barra lateral
    });
    modalHeader.append(modalButton);

    //* Agregar cada producto del carrito al modal
    carrito.forEach((product) => {
        let carritoContent = document.createElement('div');
        carritoContent.className = 'modal-content';
        carritoContent.innerHTML = `
            <img src="${product.img}" alt="${product.nombre}" class="modal-img" />
            <p>${product.nombre}</p>
            <p>${product.precio}$</p>
        `;
        modalContainer.append(carritoContent);
    });

    //* Mostrar la barra lateral
    modalContainer.classList.add('active');//se activa la transicion con el modal para que se muestre al 100%

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuyind = document.createElement('div');
    totalBuyind.className = 'total-content';
    totalBuyind.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuyind)
});
