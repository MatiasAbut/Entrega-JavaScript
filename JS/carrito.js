function showProducts() {
    let ids = []
    if (localStorage.getItem('carrito')) { 
        ids = JSON.parse(localStorage.getItem('carrito')) 
    }
    let productos = ids.map(id => listaProductos.find(e => e.id === id)) 
    productos.forEach(e => e.quantity = 1) 
    return productos
}

let carrito = showProducts() 

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
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity${prod.id}" min="1" max=${prod.stock} onchange="changeQuantity('${prod.id}')" type="number" value="1">
                    <button class="btn btn-danger buttonDelete" type="button" onclick="removeShoppingCartItem('${prod.id}')">X</button>
                </div>
            </div>
        </div>
    `)).join('')
}

let impresion = htmlCarrito(carrito)
document.getElementById('shoppingCartItemsContainer').innerHTML = impresion
updateShoppingCartTotal(carrito) 

function removeShoppingCartItem(id) {
    carrito = carrito.filter(e => e.id !== id)
    let ids = carrito.map(e => e.id) 
    localStorage.setItem('carrito', JSON.stringify(ids)) 
    document.getElementById(`show${id}`).innerHTML = "" 
    updateShoppingCartTotal(carrito) 
}

function changeQuantity(id) {
    let quantity = document.querySelector(`.shoppingCartItemQuantity${id}`).value
    carrito.find(e => e.id == id).quantity = Number(quantity)
    updateShoppingCartTotal(carrito) 
}

function updateShoppingCartTotal(productos) {
    let total = 0
    productos.forEach(e => total += e.quantity * e.precio)
    console.log(total)
    document.querySelector('.shoppingCartTotal').innerHTML = `$${total.toFixed(2)}`;
}



function comprarButtonClicked(carrito, id) {
    carrito = carrito.filter(e => e.id !== id)
    let ids = carrito.map(e => e.id)
    localStorage.clear('carrito', JSON.stringify(ids))
    document.querySelector('#shoppingCartItemsContainer').innerHTML = ""
    document.querySelector(`#finalCompra`).innerHTML = `
    <div class="dialog dialog-centered">
    <div class="compraLista">
        <div>
            <h2 class="title">Gracias por su compra</h2>
        </div>
        <div>
            <p>Pronto recibirá su pedido!</p>
        </div>
        <div>
        </div>
    </div>
</div>`
    updateShoppingCartTotal(carrito)
}