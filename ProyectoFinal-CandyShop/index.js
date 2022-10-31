const requestData = async () => {
    const resp = await fetch("./data.json");
    return await resp.json();
};

  let dataJson = [];

  requestData().then((products) => {
    dataJson = products;
    viewProducts(dataJson)
  });

// Ver productos
  const viewProducts = (data) => {
        const productContainer = document.getElementById("products_container");
        data.forEach((product) => {
          const card = document.createElement("div");
          card.setAttribute("id", `idProduct${product.id}`);
          card.setAttribute("class", "candy_car")
          card.innerHTML += ` <div>
                    <div class="img_candy">
                    <img src="${product.url}" alt="..." class="img_candy">
                    </div>
                    </div>
                     <div> 
                     <h3>${product.item}</h3>
                     <p>$ ${product.price}</p>
                     <button id="${product.id}"> Añadir al carrito </button>
                     </div>
                  </div>
                  `;
          productContainer.append(card);
          const buttonAddCart = document.getElementById(product.id);
          buttonAddCart.addEventListener("click", () => {
            console.log('añadir a carrito', product.id)
            cart(product.id);
          });
        });
      };

  let budget = 0;
  
  let buttonSearch = document.getElementById("search_button");
  buttonSearch.addEventListener("click", () => {
    budget = document.getElementById("search_input").value;
    filterProducts(dataJson, budget);
  });

  //  filtrar los items que cumplan con la condición (que el price sea menor que el presupuesto).
  //  obtener el o los items que seleccione el usuario.
  function filterProducts(dataProducts, userBudget) {
    const cartContainer = document.getElementById("menu_cart_id");
    const noProductsContainer = document.getElementById("no_products");
    const guideText = document.createElement("div");
    guideText.setAttribute("class", "ups_container")
    let filteredProducts = dataProducts.filter(
      (product) => product.price <= userBudget
    );
    if (filteredProducts.length === 0) {
      console.log("no hay productos");
      cartContainer.style.display= "none";
      noProductsContainer.innerHTML = " ";
      guideText.innerHTML = `
        <div>
            <img class="ups_Img" src="img/sitting.svg" alt="">
        </div>
        <div>
            <h1 class="ups_title">Ups!</h1>
            <p class="ups_sub_title">No tenemos dulces dentro de <br> ese rango de presupuesto..</p>
        </div>
         `;
      noProductsContainer.append(guideText);
    } else {
      cartContainer.style.display= "block";
      console.log("si hay productos");
      noProductsContainer.innerHTML = " ";
    }
    const productsContainer = document.getElementById("products_container");
    productsContainer.innerHTML = " ";
    for (let product of filteredProducts) {
      const card = document.createElement("div");
      card.setAttribute("id", `idProduct${product.id}`);
      card.setAttribute("class", "candy_car")
          card.innerHTML += ` <div>
                    <div class="img_candy">
                    <img src="${product.url}" alt="..." class="img_candy">
                    </div>
                    </div>
                     <div> 
                     <h3>${product.item}</h3>
                     <p>$ ${product.price}</p>
                     <button id="${product.id}"> Añadir al carrito </button>
                     </div>
                  </div>
                  `;
      productsContainer.append(card);
      const buttonAddCart = document.getElementById(product.id);
      buttonAddCart.addEventListener("click", () => {
        console.log('id del producto', product.id)
        cart(product.id);
        // addQuantity( otherProduct)
      });
    }
  }

//filtrar por categoria
const filterCategory = ( categoryInput, allData) => {
  const products = allData.filter( data => data.category === categoryInput)
  return products
}

const inputSelected = document.getElementById("selectCategory")

inputSelected.addEventListener('change', () => {
  const valueCategory = inputSelected.value;
  const filteredByCategory = filterCategory(valueCategory, dataJson);
  const productContainer = document.getElementById("products_container");
  const noProductsContainer = document.getElementById("no_products");
  productContainer.innerHTML = " "
  noProductsContainer.innerHTML = " "
  viewProducts(filteredByCategory)
})

// Añadir al carrito
let shoppingCart = [];
const cart = (idProduct) => {
  const emptyCart = document.querySelector(".empty");
  emptyCart.style.display= "none";
  const paySection = document.querySelector(".pay")
  paySection.style.display = "flex";
  const filteredProductsById = () => {
    let productsToBuy = dataJson.find((product) => product.id === idProduct);
    shoppingCart.push(productsToBuy);
    const saveProducts = JSON.stringify(shoppingCart);
    localStorage.setItem("productos en el carrito", saveProducts);
  };
  filteredProductsById();
  viewCart();

  console.log(shoppingCart);
};

  const viewCart = () => {
 
    const cartContainer = document.getElementById("menu_cart_products_id");
    cartContainer.innerHTML = "";
    shoppingCart.forEach((productInCart) => {
      let container = document.createElement("div");
      container.setAttribute("id", `${productInCart.id}`);
      container.setAttribute("class", "candy_Incar")
      container.innerHTML += `
      <div class="img_candy_Incar">
      <img class="img_candy_Incar" src="${productInCart.url}" alt="...">
      </div>
      <div class="menu_cart_info"> 
      <p>${productInCart.item}</p>
      <p>$ ${productInCart.price}</p>
      </div>
      <button type="button" id="eliminar${productInCart.id}"><img src="img/delete_button.png" alt="button_delete"></button>
  `;

      cartContainer.appendChild(container);
      const buttonRemoveCart = document.getElementById(`eliminar${productInCart.id}`)
       buttonRemoveCart.addEventListener('click', ()=>{
          // console.log('quitando elemento')
          console.log('Este es el ID que entra en el boron borrar',`${productInCart.id}` )
          deleteProduct(`${productInCart.id}`)})
       
    });
  };
  
  const getItems = () => {
   
    shoppingCart = JSON.parse(localStorage.getItem("productos en el carrito")) || [];
    if( shoppingCart === [] ){
      const emptyCart = document.querySelector(".empty");
      emptyCart.style.display= "block";
    } 
    viewCart();
    // return JSON.parse(localStorage.getItem("productos en el carrito")) || [];
  };
 
  getItems();
  
  deleteProduct = (idProductToDelete) => {
    console.log('eliminado',shoppingCart)
    // if( shoppingCart.findIndex(product => product.id === idProductToDelete) ){
    //    shoppingCart.splice(productIndex, 1)
    //    console.log(shoppingCart)
    // }
    // const index = shoppingCart.findIndex(
    //   (product) => product.id === idProductToDelete
    // );
 
    // Swal.fire({
    //   title: "¿Seguro quieres eliminar el producto?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonText: "Sí, eliminar",
    //   cancelButtonText: "Cancelar",
    // }).then((resultado) => {
    //   console.log(resultado)
    //   if (resultado.isConfirmed === false) {
    //     console.log('que sale', resultado.isConfirmed )
    //     // Hicieron click en "cancelar"
    //     console.log("*NO se elimina el producto*");
       
    //   } else {
    //     // Dijeron que si
    //     // shoppingCart.splice(index, 1);
    //     // const card = document.getElementById(`idProduct${idProductToDelete}`);
    //     // card.remove();
    //     // localStorage.clear();
    //   }
    // });

Swal.fire({
  title: '¿Estás Seguro?',
  text: "¿quieres eliminar el producto?",
  icon: 'warning',
  iconColor:'#FF5678',
  showCancelButton: true,
  confirmButtonColor: '#1E1E1E',
  color: '#1E1E1E',
  cancelButtonColor: '#FF5678',
  confirmButtonText: 'Si',
  cancelButtonText:'No'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: 'Eliminado!',
      icon: 'success',
      color: '#1E1E1E',
      confirmButtonColor: '#1E1E1E'
    } 
    )
   
    // const card = document.getElementById(`idProduct${idProductToDelete}`);
    const index = shoppingCart.findIndex(
      (element)=>element.id === idProductToDelete
    );
   
    shoppingCart.splice(index, 1);
    viewCart();
    // card.remove();
    localStorage.clear();
  }else {
  console.log('SII, mejor lleva todos los dulces!')
  }
   
})
};

const pay = () => {
  const payButton = document.getElementById('pay_button')
  payButton.addEventListener('click', ()=>{
    Swal.fire({ title: 'Tu compra se realizó con exito!',
    icon: 'success',
    color: '#1E1E1E',
    confirmButtonColor: '#FF5678'
  })
    console.log('pagar')
  })
}

pay()
