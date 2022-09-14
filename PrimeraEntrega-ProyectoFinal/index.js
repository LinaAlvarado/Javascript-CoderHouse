//PRIMERA ENTREGA PROYECTO FINAL
//* 3. Funciones esenciales del proceso a simular.
//*  3.1 Función muestra productos menores al presupuesto del cliente
// 3.1.1. pide un presupuesto. 
// 3.1.2. filtrar los articulos que cumplan con la condición (que el precio sea menor que el presupuesto).
// 3.1.3. mostrar en un promt los articulos disponibles.
// 3.1.4. obtener el o los articulos que seleccione el usuario.
// 3.1.5. sumar precios
// 3.1.6. mostrar en pantalla lo que compro, y el total de la compra.

const productos =[
    { articulo: "zapatos" , precio: 100000},
    { articulo: "tenis" , precio: 50000},
    { articulo: "vestido" , precio: 100000},
    { articulo: "reloj" , precio: 30000},
    { articulo: "anillo" , precio: 85000},
    { articulo: " falda" , precio: 76000},
    { articulo: " celular" , precio: 700000},
    { articulo: " juguete" , precio: 40000},
    { articulo: " marcador" , precio: 2000},
] 

// 3.1.1. pide un presupuesto.
function entradaPresupuestoUsuario() {
    let presupuesto = Number(prompt("Ingresa tu presupuesto, filtraremos los productos ideales para ti"));
    filtrarProductos(productos, presupuesto)
    return presupuesto;
}

// 3.1.2. filtrar los articulos que cumplan con la condición (que el precio sea menor que el presupuesto).
// 3.1.3. mostrar en un promt los articulos disponibles.
// 3.1.4. obtener el o los articulos que seleccione el usuario.
function filtrarProductos(data, presupuestoUsuario){
    let productosDisponibles = "";
    // se filtra el array
    let productosFiltrados = data.filter((producto) => producto.precio <= presupuestoUsuario)
    // sino hay coincidencias se envia un alert
    if(productosFiltrados.length === 0){
        alert("No hay productos dentro del rango del presupuesto")
    } else {
        alert("Acontinuación se mostrará los articulos que coinciden con tu presupuesto, por favor, seleccionar los elementos separados por una coma (,)")
    }
    // se recorre el array y se guardan para enviarlas en un prompt
    for (let producto of productosFiltrados){
        productosDisponibles = productosDisponibles +` ${producto.articulo} : ${producto.precio} `;
    }
    // obtengo el producto o productos que el usuario quiere comprar
    let seleccionarProductos = prompt(`Estos son los articulos que coinciden en tu presupuesto, ¿Cuál quieres comprar? ${productosDisponibles}`)
    // pero obtengo los elementos en un mismo string, se deben separar para seguir con el siguiente paso
    let productosSeparados = seleccionarProductos.split(',');
    return productosSeparados;
}
;

// 3.1.5. sumar precios
// 3.1.6. mostrar en pantalla lo que compro, y el total de la compra.




entradaPresupuestoUsuario()














//* FUNCIÓN SELECCIONA PRODUCTOS Y MUESTRA DESCUENTO Y PRECIO TOTAL EN PANTALLA
// let misProductos = [];
// let entrada = prompt(`Seleccionar Producto Del 1 Al 4
// 1. Jean
// 2. Camiseta
// 3. Reloj
// 4. Tennis`).toLowerCase();

// while (entrada != 'fin') {
//     switch (entrada) {
//         case "1":
//             alert("Jean");
//             let precioProducto1 = 200000;
//             console.log(precioProducto1);
//             misProductos.push(200000);
//             break;
//         case "2":
//             alert("Camiseta");
//             let precioProducto2 = 120000;
//             console.log(precioProducto2);
//             misProductos.push(120000);
//             break;
//         case "3":
//             alert("Reloj");
//             let precioProducto3 = 50000;
//             console.log(precioProducto3);
//             misProductos.push(50000);
//             break;
//         case "4":
//             alert("Tennis");
//             let precioProducto4 = 200000;
//             console.log(precioProducto4);
//             misProductos.push(200000);
//             break;
//         default:
//             alert("No Escribiste o no existe el producto");
//             break;
//     }
//     entrada =  prompt(`¿Quieres seleccionar otro producto? / Para finalizar compra escribe "Fin"
//     1. Jean
//     2. Camiseta
//     3. Reloj
//     4. Tennis`).toLowerCase();
// }

// function suma() {
//     let suma1 = 0;
//     for ( i = 0; i < misProductos.length; i++) {
//         suma1 += misProductos[i];
//     }
//     if (suma1 <= 200000) {
//         document.write(`<p>Precio Total: ${suma1}</p>`);
//     } else {
//         let descuento = suma1 * 0.15;
//         let precioFinal_total = suma1 - descuento;
//         document.write(`<p>Precio Total: ${suma1}</p>`);
//         document.write(`<p>Tu Descuento Fue: ${descuento}</p>`)
//         document.write(`<p>Precio Total a Pagar Es: ${precioFinal_total}</p>`);
//     }
// }
// suma()



