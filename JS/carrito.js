function showProducts() {
    let ids = []
    if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
        ids = JSON.parse(localStorage.getItem('carrito')) //cargo los ids
    }
    return ids.map(id => listaProductos.find(e => e.id === id)) //defino los productos
}

let carrito = showProducts() //cargo los productos
console.log(carrito)

function htmlCarrito(products) {
    return products.map(prod => (`
        <div class="row shoppingCartItem" id="show${prod.id}">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${prod.image} class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${prod.nombre}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${prod.precio}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete" type="button" onclick="removeShoppingCartItem('${prod.id}')">X</button>
                </div>
            </div>
        </div>
    `)).join('')
}

let impresion = htmlCarrito(carrito)
console.log(impresion)

document
  .getElementById('shoppingCartItemsContainer').innerHTML = impresion

document
.querySelector('.shoppingCartItemQuantity')
.addEventListener('change', quantityChanged);

updateShoppingCartTotal()


function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
  }



  function removeShoppingCartItem(id) {
    carrito = carrito.filter(e => e.id !== id)
    console.log(carrito)
    let ids = carrito.map(e => e.id)
    localStorage.setItem('carrito', JSON.stringify(ids)) //vuelvo a guardar en el storage el carrito, sino no se borra nunca del storage
    console.log(document.getElementById(`show${id}`))
    document.getElementById(`show${id}`).innerHTML = ""
    
  }
  
  function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
  }

  function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
  }

  