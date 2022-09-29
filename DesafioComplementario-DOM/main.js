//PRIMERA ENTREGA PROYECTO FINAL
//* 3. Funciones esenciales del proceso a simular.
//  3.1 Función muestra productos menores al presupuesto del cliente
// 3.1.1. pide un presupuesto. 
// 3.1.2. filtrar los articulos que cumplan con la condición (que el precio sea menor que el presupuesto).
// 3.1.3. mostrar en un promt los articulos disponibles.
// 3.1.4. obtener el o los articulos que seleccione el usuario.
// 3.1.5. sumar precios
// 3.1.6. mostrar en pantalla lo que compro, y el total de la compra.

// const productos =[
//     { articulo: "zapatos" , precio: 100000, url:"./src/img/zapato.png"},
//     { articulo: "tenis" , precio: 50000, url:"./src/img/tenis.png"},
//     { articulo: "vestido" , precio: 100000,  url:"./src/img/Vestido.png"},
//     { articulo: "reloj" , precio: 30000,  url:"./src/img/Reloj.png"},
//     { articulo: "anillo" , precio: 85000,  url:"./src/img/anillo.png"},
//     { articulo: "falda" , precio: 76000,  url:"./src/img/Falda.png"},
//     { articulo: "celular" , precio: 700000,  url:"./src/img/Celular.png"},
//     { articulo: "juguete" , precio: 40000,  url:"./src/img/Juguete.png"},
//     { articulo: "marcador" , precio: 2000, url:"./src/img/marcador.png"},
// ] 

// let ingresoPresupuesto = 0;
// // 3.1.1. pide un presupuesto.
// function entradaPresupuestoUsuario() {
//     let boton = document.getElementById('botonBuscar');
//     boton.addEventListener('click', () => {
//         ingresoPresupuesto = document.getElementById('buscador').value;
//         filtrarProductos(productos, ingresoPresupuesto)
//         return ingresoPresupuesto;
//     });
//     // presupuesto = Number(prompt("Ingresa tu presupuesto, filtraremos los productos ideales para ti"));
// };

// // 3.1.2. filtrar los articulos que cumplan con la condición (que el precio sea menor que el presupuesto).
// // 3.1.3. mostrar en un promt los articulos disponibles.
// // 3.1.4. obtener el o los articulos que seleccione el usuario.
// function filtrarProductos(data, presupuestoUsuario){
//     let productosDisponibles = "";
//     // se filtra el array
//     let productosFiltrados = data.filter((producto) => producto.precio <= presupuestoUsuario)
//     // sino hay coincidencias se envia un alert
//     if(productosFiltrados.length === 0){
//         alert("No hay productos dentro del rango del presupuesto")
//     } else {
//         alert("Acontinuación se mostrará los articulos que coinciden con tu presupuesto, por favor, seleccionar los elementos separados por una coma (,) y sin dejar espacios")
//     }
//     // se recorre el array y se guardan para enviarlas en un prompt
//     for (let producto of productosFiltrados){
//         productosDisponibles = productosDisponibles +` ${producto.articulo} : ${producto.precio} `;
//     }
//     // obtengo el producto o productos que el usuario quiere comprar
//     let seleccionarProductos = prompt(`Estos son los articulos que coinciden en tu presupuesto, ¿Cuál quieres comprar? ${productosDisponibles}`)
//     // pero obtengo los elementos en un mismo string, se deben separar para seguir con el siguiente paso
//     let articulosArray= seleccionarProductos.split(',');
//     sumarPrecios(articulosArray)
//     return articulosArray;
// };

//     // 3.1.5. sumar precios
//     // 3.1.6. mostrar en pantalla lo que compro, y el total de la compra.

// let suma = 0;
// function sumarPrecios(articulos){
//     articulos.forEach(articulo => {
//     const productosAcomprar = productos.find(producto => producto.articulo == articulo); 
//     suma += productosAcomprar.precio;
//     });

//     console.log(suma);
//     let contenedor = document.createElement("div")
//     contenedor.innerHTML = `
//     <h3> Detalles de la compra</h3>
//     <p> Articulos: ${articulos}</p>
//     <img src="${fotos}">
//     <p> Tu presupuesto fue: ${ingresoPresupuesto}</p>
//     <p> Total de la compra:${suma} </p>`
//     document.body.appendChild(contenedor);
//     // document.write(`Compraste:${articulos} <br>`)
//     // document.write(`Total de la compra:${suma}`)
//     // if (suma > ingresoPresupuesto){
//     //     let contenedor = document.createElement("div")
//     //     contenedor.innerHTML = `<p> Has pasado tu presupuesto, te faltan:${suma - ingresoPresupuesto}</p>` 
//     //     document.body.appendChild(contenedor);
//     // };
// };
// entradaPresupuestoUsuario();




