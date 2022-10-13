// Prueba 1
// let dataJson =[];
// const peticion =  async ( ) => {
//    const resp = await fetch("/Fetch/js/productsData.json")
//    const json = await resp.json()
//    return dataJson.push(json)
// };

const viewProducts = () => {
   const productContainer = document.getElementById('products-container');
   fetch("js/productsData.json")
   .then((res)=> res.json())
   .then((data)=> {
      data.forEach(product => {
         const card = document.createElement('div');
         card.setAttribute('id',`idProduct${product.id}` )
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
   })
  
};

viewProducts();

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
   productsContainer.innerHTML = ' ';
   for (let product of filteredProducts) {
      const card = document.createElement('div');
      card.setAttribute('id',`idProduct${product.id}` )
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
      container.setAttribute('id',`idProduct${productInCart.id}` )
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

const terminarCompra = () => {
   const getShoppingCart = JSON.parse(localStorage.getItem('productos en el carrito')) || []
   viewCart(getShoppingCart)
}

terminarCompra();

deleteProduct = (idProductToDelete) =>{
   // if( shoppingCart.findIndex(product => product.id === idProductToDelete) ){
   //    shoppingCart.splice(productIndex, 1)
   //    console.log(shoppingCart)
   // }
   const index = shoppingCart.findIndex(product => product.id === idProductToDelete);
   shoppingCart.splice(index, 1)
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
           const card = document.getElementById(`idProduct${idProductToDelete}`)
           card.remove()
           localStorage.clear() 
       } else {
           // Dijeron que no
           console.log("*NO se elimina el producto*");
       }
   });

   // const cartContainer = document.getElementById('shopping-cart');
   // cartContainer.innerHTML = ''
}










