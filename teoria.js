const prompt = require("prompt-sync")(); //definir promt para luego usarlo para leer entrada de datos.

const productos = [
  { nombre: "harina", precio: 50 },
  { nombre: "galletas", precio: 100 },
  { nombre: "cerveza", precio: 150 },
  { nombre: "leche", precio: 200 },
  { nombre: "gaseosa", precio: 250 },
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun producto: ");

while (seleccion != "si" && seleccion != "no") {
  console.log("Por favor ingresa si o no.");
  seleccion = prompt("hola desea comprar algun producto: ");
}

if (seleccion == "si") {
  console.log("a continuacion una lista de productos: "); //to aqui podrias mencionar enseguida los productos ya que estoy en un log... pero si es necesario usar un alert o algo para la pag pues es como abajo
  let todoProduct = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$"
  );
  console.log(todoProduct.join(" - "));
} else if (seleccion == "no") {
  console.log("Gracias por venir, hasta pronto.");
}

while (seleccion != "no") {
  let producto = prompt("Agregar un producto a tu carrito: ");
  let precio = 0;

  if (
    producto == "harina" ||
    producto == "galletas" ||
    producto == "cerveza" ||
    producto == "leche" ||
    producto == "gaseosa"
  ) {
    switch (producto) {
      case "harina":
        precio = 50;
        break;
      case "galletas":
        precio = 100;
        break;
      case "cerveza":
        precio = 150;
        break;
      case "leche":
        precio = 200;
        break;
      case "gaseosa":
        precio = 250;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt('Cuantas unidades quiere llevar? '))

    carrito.push({producto, unidades, precio})//se tiene que meter todo como objeto. por eso las llaves
    console.log(carrito);
  }else {
    console.error('no tenemos ese producto');
  }

  seleccion = prompt('Desea seguir comprando? ')
  while(seleccion == 'no') {
    console.log('gracias por la compra. hasta pronto');
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
    })
    break;
  }
}

//*suma de todo por mediante reduce. solo pilla el acumulador y el atributo
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)//acc: acumulador. el: representa el valor eldel atributo
console.log(`el total a pagar por su compra es: ${total}`);

