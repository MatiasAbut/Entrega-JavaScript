let carrito = []

function addToCartClicked() {
    if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
        carrito = JSON.parse(localStorage.getItem('carrito')) //si existe lo defino

    }
    let productos = carrito.map(id => listaProductos.find(e => e.id === id)) //defino los productos
    console.log(productos) //veo si se cargan
    return productos
}

carrito = addToCartClicked()





function renderCarrito() {
    carrito.map(producto => {
        const Content = `
      
      <div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <img src=${producto.image} class="shopping-cart-image">
              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto.nombre}</h6>
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0 shoppingCartItemPrice">${producto.precio}</p>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                  value="1">
              <button class="btn btn-danger buttonDelete" type="button">X</button>
          </div>
      </div>
  </div>
      
      `
        shoppingCartItemsContainer.innerHTML = Content;


        shoppingCartItemsContainer.querySelector(".delete").addEventListener('click', removeItemCarrito)
        shoppingCartItemsContainer.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    render(productos)
}