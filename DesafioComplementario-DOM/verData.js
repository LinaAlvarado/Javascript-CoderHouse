// Inventario de productos
class Productos {
   constructor(id, articulo, precio, url){
    this.id = id;
    this.articulo = articulo;
    this.precio = precio;
    this.url= url;
   }
}

const productos = [];
const item1 = new Productos ('1', 'zapatos', 200000, 'src/img/zapato.png');
const item2 = new Productos ('2', 'tenis', 50000, 'src/img/tenis.png');
const item3 = new Productos ('3', 'vestido', 100000, 'src/img/Vestido.png');
const item4 = new Productos ('4', 'reloj', 30000, 'src/img/Reloj.png');
const item5 = new Productos ('5', 'anillo', 85000, 'src/img/anillo.png');
const item6 = new Productos ('6', 'falda', 76000, 'src/img/Falda.png');
const item7 = new Productos ('7', 'celular', 700000, 'src/img/Celular.png');
const item8 = new Productos ('8', 'juguete', 40000, 'src/img/Juguete.png');
const item9 = new Productos ('9', 'marcador', 2000, 'src/img/marcador.png');

productos.push(item1, item2,item3,item4, item5, item6, item7, item8, item9);
// console.log('array con productos',productos)

// ver productos en pantalla
const verProductos = (todosProductos) => {
 
  const contenedorProductos = document.getElementById('productosContenedor');
  todosProductos.forEach( producto => {
   const card = document.createElement('div');
   card.innerHTML +=`
   <img src="${producto.url}" alt="...">
   <div> 
   <h3>${producto.articulo}</h3>
   <p>$ ${producto.precio}</p>
   <button id="${producto.id}"> Añadir al carrito </button>
   </div>
   `
   contenedorProductos.append(card);
   const boton = document.getElementById(`${producto.id}`);
    boton.addEventListener('click', ()=>{
      carrito(`${producto.id}`);
   })
  });
};

verProductos(productos);

let ingresoPresupuesto = 0;

let boton = document.getElementById('botonBuscar');
      boton.addEventListener('click', () => {
      ingresoPresupuesto = document.getElementById('buscador').value;
      filtrarProductos(productos, ingresoPresupuesto)
   });

//  filtrar los articulos que cumplan con la condición (que el precio sea menor que el presupuesto).
//  obtener el o los articulos que seleccione el usuario.
function filtrarProductos(data, presupuestoUsuario){
   const contenedorNoProductos = document.getElementById('noHayProductos');
   const anuncio = document.createElement('div');

    let productosFiltrados = data.filter((producto) => producto.precio <= presupuestoUsuario);
   //  console.log(productosFiltrados)
    if(productosFiltrados.length === 0){
      console.log('no hay productos')
      contenedorNoProductos.innerHTML= ' ';
      anuncio.innerHTML =`
      <h3> No hay productos dentro de tu rango de presupuesto..</h3>
      <p> Nuestro rango de precios esta entre 2000 - 700000 </p>
      `
      contenedorNoProductos.append(anuncio);
    } else{
      console.log('si hay productos')
      contenedorNoProductos.remove(anuncio);
    }

    const contenedorProductos = document.getElementById('productosContenedor');
    contenedorProductos.innerHTML='';
    //   let productosDisponibles = "";
    // se recorre el array y se guardan para enviarlas en un prompt
      for (let producto of productosFiltrados){
      // productosDisponibles = productosDisponibles +` ${producto.articulo} : ${producto.precio} `;
      const card = document.createElement('div');
      card.innerHTML +=`
      <img src="${producto.url}" alt="...">
      <div> 
      <h3>${producto.articulo}</h3>
      <p>$ ${producto.precio}</p>
      <button id="${producto.id}"> Añadir al carrito </button>
      </div>
   `
   contenedorProductos.append(card);
   const boton = document.getElementById(`${producto.id}`);
   boton.addEventListener('click', ()=>{
   carrito(`${producto.id}`);
   })
    }
    // obtengo el producto o productos que el usuario quiere comprar
   //  let seleccionarProductos = prompt(`Estos son los articulos que coinciden en tu presupuesto, ¿Cuál quieres comprar? ${productosDisponibles}`)
    // pero obtengo los elementos en un mismo string, se deben separar para seguir con el siguiente paso
   //  let articulosArray= seleccionarProductos.split(',');
   //  sumarPrecios(articulosArray)
   //  return articulosArray;
};

const carritoCompras = [];
const carrito = (idProducto)=>{
    const filtroIdProductos = ()=> {
        let productoCar = productos.find( producto => producto.id === idProducto);
        carritoCompras.push(productoCar)
        const productosGuardados = JSON.stringify(carritoCompras)
        localStorage.setItem('productos en el carrito', productosGuardados)

        //   console.log(carritoCompras)
    }
    filtroIdProductos();
    verCarrito(carritoCompras)
};

const verCarrito = (ProductosCarrito) => {
  
   const contenedorCarrito = document.getElementById('alCarrito');
   ProductosCarrito.forEach( productoComprado => {
      let contenedor = document.createElement('div')
      contenedor.classList.add('carrito')
      contenedor.innerHTML += `
      <img src="${productoComprado.url}" alt="...">
      <div> 
      <h3>${productoComprado.articulo}</h3>
      <p>$ ${productoComprado.precio}</p>
      <button id="eliminar${productoComprado.id}"> Eliminar </button>
      </div>
      `
      contenedorCarrito.appendChild(contenedor)
   })
}

const terminarCompra = () =>{
   const terminarCompra = localStorage.getItem('productos en el carrito')
   JSON.parse(terminarCompra)
   console.log('setItem', terminarCompra)
}

terminarCompra();






















    // 3.1.5. sumar precios
    // 3.1.6. mostrar en pantalla lo que compro, y el total de la compra.

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

