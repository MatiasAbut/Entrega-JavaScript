let carrito = []

function addToCartClicked(id) {
  console.log(id);
  if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
    carrito = JSON.parse(localStorage.getItem('carrito')) //si existe lo defino
    //console.log(carrito)
  } 
  let verification = carrito.find(e => e === id) //busco el id entre los id que hay en el carrito
  //console.log(verification) 
  if (verification) { //si encuentro un producto
    carrito = carrito.filter( e => e !== id) //hay que sacarlo del carrito
  } else { //si no existe
    carrito.push(id) //hay que agregarlo
  }
  //console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito)) //vuelvo a guardar en el storage el carrito
  //ESTAS 3 LINEAS NO SE NECESITAN ACÁ SALVO QUE QUIERAS RENDERIZAR EL CARRITO EN ESTA PAGINA (MALA UX)
  let productos = carrito.map(id => listaProductos.find(e => e.id===id)) //defino los productos
  console.log(productos) //veo si se cargan
  return productos //ESTE DATO ES EL QUE LUEGO TENDRIA QUE RENDERIZAR (HACELO EN CARRITO PORFA)
  //addItemToShoppingCart(producto.nombre, producto.precio, producto.image)
  //lo mismo esta funcion... ver donde renderizas
}


//CARRITO DE COMPRAS
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');

comprarButton.addEventListener('click', (comprarButtonClicked));

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.itemTitle').textContent;
  const itemPrice = item.querySelector('.itemPrice').textContent;
  const itemImage = item.querySelector('.itemImage').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
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
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

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
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`
  render(carrito)
  render(addItemToShoppingCart(producto.nombre, producto.precio, producto.image))
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

//NO PUEDO HACER QUE SE CIERRE EL MODAL CON LOS BOTONES 
function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = `  <div class="modal-fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
      </div>
      <div class="modal-body">
        <p>Pronto recibirá su pedido. Vuelva pronto!</p>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>      
  `;
  updateShoppingCartTotal();
}
