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
        <div class="row shoppingCartItem">
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
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>
    `)).join('h')
}

let impresion = htmlCarrito(carrito)
console.log(impresion)

document.getElementById('shoppingCartItemsContainer').innerHTML = impresion