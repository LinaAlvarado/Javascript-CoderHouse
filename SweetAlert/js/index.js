
// Inventario de productos
class Products {
   constructor(id, item, price, url,quantity) {
      this.id = id;
      this.item = item;
      this.price = price;
      this.url = url;
      this.quantity= quantity;
   }
}

const allProducts = [];
const item1 = new Products('1', 'zapatos', 200000, 'img/zapato.png', 0);
const item2 = new Products('2', 'tenis', 50000, 'img/tenis.png', 0);
const item3 = new Products('3', 'vestido', 100000, 'img/Vestido.png', 0);
const item4 = new Products('4', 'reloj', 30000, 'img/Reloj.png', 0);
const item5 = new Products('5', 'anillo', 85000, 'img/anillo.png', 0);
const item6 = new Products('6', 'falda', 76000, 'img/Falda.png', 0);
const item7 = new Products('7', 'celular', 700000, 'img/Celular.png', 0);
const item8 = new Products('8', 'juguete', 40000, 'img/Juguete.png', 0);
const item9 = new Products('9', 'marcador', 2000, 'img/marcador.png', 0);

allProducts.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);
// console.log('array con productos',productos)

// ver productos en pantalla
const viewProducts = (products) => {
   const productContainer = document.getElementById('products-container');
      products.forEach(product => {
      const card = document.createElement('div');
      card.innerHTML +=
      ` <div>
            <img src="${product.url}" alt="...">
            <div> 
            <h3>${product.item}</h3>
            <p>$ ${product.price}</p>
            <button id="${product.id}"> Añadir al carrito </button>
            </div>
         </div>
         `
      productContainer.append(card);
      const buttonAddCart = document.getElementById(`${product.id}`);
      buttonAddCart.addEventListener('click', () => {
         cart(`${product.id}`);
      })
   });
};

viewProducts(allProducts);

let budget = 0;

let buttonSearch = document.getElementById('search-button');
buttonSearch.addEventListener('click', () => {
   budget = document.getElementById('search-input').value;
   filterProducts(allProducts, budget)
});

//  filtrar los items que cumplan con la condición (que el price sea menor que el presupuesto).
//  obtener el o los items que seleccione el usuario.
function filterProducts(dataProducts, userBudget) {
   const noProductsContainer = document.getElementById('no-products');
   const guideText = document.createElement('div');

   let filteredProducts = dataProducts.filter((product) => product.price <= userBudget);
   if (filteredProducts.length === 0) {
      console.log('no hay productos')
      noProductsContainer.innerHTML = ' ';
      guideText.innerHTML = `
       <h3> No hay productos dentro de tu rango de presupuesto..</h3>
       <p> Nuestro rango de prices esta entre 2000 - 700000 </p>
       `
      noProductsContainer.append(guideText);
   } else {
      console.log('si hay productos')
      noProductsContainer.innerHTML = ' '
   }
   const productsContainer = document.getElementById('products-container')
   productsContainer.innerHTML = '';
   for (let product of filteredProducts) {
      const card = document.createElement('div');
      card.innerHTML += `
    <img src="${product.url}" alt="...">
    <div> 
    <h3>${product.item}</h3>
    <p>$ ${product.price}</p>
    <button id="${product.id}"> Añadir al carrito </button>
    </div>
    `
      productsContainer.append(card);
      const buttonAddCart = document.getElementById(`${product.id}`);
      buttonAddCart.addEventListener('click', () => {
         cart(`${product.id}`);
         // addQuantity( otherProduct)
      })
   }

};

const shoppingCart = [];
const cart = (idProduct) => {
   const filteredProductsById = () => {
      let productsToBuy = allProducts.find(product => product.id === idProduct);
      shoppingCart.push(productsToBuy)
      const saveProducts = JSON.stringify(shoppingCart)
      localStorage.setItem('productos en el carrito', saveProducts)
   }
   filteredProductsById();
   viewCart(shoppingCart)
   
console.log(shoppingCart)
};

const viewCart = (productsInCart) => {
   const cartContainer = document.getElementById('shopping-cart');
   cartContainer.innerHTML = ''
   productsInCart.forEach(productInCart => {
      let container = document.createElement('div')
      container.classList.add('cart')
      container.innerHTML += `
       <img src="${productInCart.url}" alt="...">
       <div> 
       <h3>${productInCart.item}</h3>
       <p>$ ${productInCart.price}</p>
       <button id="eliminar${productInCart.id}"> Eliminar </button>
       </div>
       `
      cartContainer.appendChild(container)
      const buttonRemoveCart = document.getElementById(`eliminar${productInCart.id}`)
      buttonRemoveCart.addEventListener('click', ()=>{
         // console.log('quitando elemento')
         deleteProduct(`${productInCart.id}`)
      })
   })
}

// let carro = []
// const terminarCompra = () => {
//    const terminarCompra = localStorage.getItem('productos en el carrito')
//    carro.push(JSON.parse(terminarCompra))
//    console.log(carro)
   // console.log('setItem', terminarCompra)
// }

// terminarCompra();

deleteProduct = (idProductToDelete) =>{
   // if( shoppingCart.findIndex(product => product.id === idProductToDelete) ){
   //    shoppingCart.splice(productIndex, 1)
   //    console.log(shoppingCart)
   // }
   const index = shoppingCart.findIndex(product => product.id === idProductToDelete);
   shoppingCart.splice(index, 1)
   console.log(shoppingCart)
   Swal
   .fire({
       title: "¿Seguro quieres eliminar el producto?",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: "Sí, eliminar",
       cancelButtonText: "Cancelar",
   })
   .then(resultado => {
       if (resultado.value) {
           // Hicieron click en "Sí"
           console.log("*se elimina el producto*");
       } else {
           // Dijeron que no
           console.log("*NO se elimina el producto*");
       }
   });

   // const cartContainer = document.getElementById('shopping-cart');
   // cartContainer.innerHTML = ''

}










