 function Producto(nombre, precio, stock, image, tipo, celiaco, categoria) {
     this.nombre = nombre
     this.precio = precio
     this.stock = stock
     this.image = image
     this.tipo = tipo
     this.celiaco = celiaco
     this.categoria = categoria
     this.sumarIva = function (precio) {
         return precio * 0.21
     }
     this.sumarStock = function (cantidad) {
         this.stock += cantidad
     }
 }

 const productoA = new Producto("3-D", 220, 10, "/Multimedia/3d.jpg", "salado", "noCeliaco", "snacks")
 const productoB = new Producto("9 de oro - Agridulce", 120, 15, "Multimedia/9deoroazucarada.jpg", "dulce", "noCeliaco", "galletitas")
 const productoC = new Producto("9 de oro - Azucarada", 120, 15, '/Multimedia/9deoroagridulces.jpg', "dulce", "noCeliaco", "galletitas")
 const productoD = new Producto("9 de oro - Clasica", 120, 15, '/Multimedia/9deoroclasica.jpg', "salado", "noCeliaco", "galletitas")
 const productoE = new Producto("Aguila Brownie", 145, 20, "Multimedia/aguilabrownie.jpg", "dulce", "noCeliaco", "alfajores")
 const productoF = new Producto("Aguila Clasico", 145, 20,"Multimedia/AGUILACLASICO.png", "dulce", "noCeliaco", "alfajores")
 const productoG = new Producto("Alfajor Bon o Bon", 145, 20,"Multimedia/alfajorbonobon.jpg", "dulce", "noCeliaco", "alfajores")
 const productoH = new Producto("Alfajor Oreo", 145, 20,"Multimedia/alfajororeo.jpg", "dulce", "noCeliaco", "alfajores")
 const productoI = new Producto("Alfajor Pepitos", 145, 20,"Multimedia/alfajorpepito.png", "dulce", "noCeliaco", "alfajores")
 const productoJ = new Producto("Caramelos Alka", 2, 50,"Multimedia/alka.jpeg", "dulce", "celiaco", "caramelos")
 const productoK = new Producto("Arcor Chocolate y menta", 7, 50, "Multimedia/arcorchocolateymenta.jpg", "dulce", "celiaco", "caramelos")
 const productoL = new Producto("Arcor de miel", 7, 50, "Multimedia/arcordemiel.jpg", "dulce", "celiaco", "caramelos")
 const productoM = new Producto("Bagley 3.0 Blanco", 145, 20, "Multimedia/bagleyblanco.png", "dulce", "noCeliaco", "alfajores")
 const productoN = new Producto("Bagley 3.0 Negro", 145, 20, "Multimedia/bagleynegro.jpg", "dulce", "noCeliaco", "alfajores")
 const productoO = new Producto("Bazooka Banana", 8, 50, "Multimedia/bazookabanana.jpg", "dulce", "celiaco", "chicles")
 const productoP = new Producto("Bazooka Menta", 8, 50,"Multimedia/bazookamenta.png", "dulce", "celiaco", "chicles")
 const productoQ = new Producto("Bazooka Tutti Frutti", 8, 50,"Multimedia/bazookatuttifuttie.jpg", "dulce", "celiaco", "chicles")
 const productoR = new Producto("Beldent", 70, 30,"Multimedia/beldent.jpg", "dulce", "celiaco", "chicles")
 const productoS = new Producto("Beldent Infinit", 130, 30,"Multimedia/beldentinfinite.jpg", "dulce", "celiaco", "chicles")
 const productoT = new Producto("Billiken Yogur", 4, 50,"Multimedia/billikenyogur.jpg", "dulce", "celiaco", "caramelos")
 const productoU = new Producto("Block", 120, 15, "Multimedia/block.jpg", "dulce", "noCeliaco", "chocolates")
 const productoV = new Producto("Block 300", 1200, 10, "Multimedia/block300.jpg", "dulce", "celiaco", "chocolates")
 const productoW = new Producto("Blockazo", 3000, 5, "Multimedia/blockaso.jpg", "dulce", "celiaco", "chocolates")
 const productoX = new Producto("Bon o Bon", 50, 30, "Multimedia/bonobon.webp", "dulce", "noCeliaco", "bombones")
 const productoY = new Producto("Bon o Bon Blanco", 50, 30, "Multimedia/bonobonblanco.png", "dulce", "noCeliaco", "bombones")
 const productoZ = new Producto("Boobaloo Menta", 10, 40,"Multimedia/boobaloomenta.png", "dulce", "celiaco", "chicles")
 const productoAA = new Producto("Boobaloo Tutti Frutti", 7, 40,"Multimedia/boobalootuttifuttie.webp", "dulce", "celiaco", "chicles")
 const productoAB = new Producto("Butter Toffee Cafe", 7, 40,"Multimedia/buttertoffiecafe.jpg", "dulce", "celiaco", "caramelos")
 const productoAC = new Producto("Butter Toffee Bon o Bon", 7, 40,"Multimedia/buttertoffiebonobon.jpg", "dulce", "celiaco", "caramelos")
 const productoAD = new Producto("Butter Toffee Chocolate", 7, 40,"Multimedia/buttertoffiechocolate.jpg", "dulce", "celiaco", "caramelos")
 const productoAE = new Producto("Butter Toffee Chocolate Aguila", 7, 40, "Multimedia/buttertoffiechocolateaguila.jpg", "dulce", "celiaco", "caramelos")
 const productoAF = new Producto("Butter Toffee Chocolate Blanco", 7, 40, "Multimedia/buttertoffiechocolateblanco.jpg", "dulce", "celiaco", "caramelos")
 const productoAG = new Producto("Butter Toffee Dulce de leche", 7, 40, "Multimedia/buttertoffiedulcedeleche.jpg", "dulce", "celiaco", "caramelos")
 const productoAH = new Producto("Butter Toffee Leche", 7, 40, "Multimedia/buttertoffieleche.jpg", "dulce", "celiaco", "caramelos")
 const productoAI = new Producto("Butter Toffee Menta", 7, 40, "Multimedia/buttertoffiementa.jpg", "dulce", "celiaco", "caramelos")
 const productoAJ = new Producto("Bocadito Cabsha", 60, 30,"Multimedia/cabsha.jpg", "dulce", "noCeliaco", "bombones")
 const productoAK = new Producto("Cadbury Tres Sueños", 170, 10,"Multimedia/cadburytressuenos.webp", "dulce", "noCeliaco", "chocolates")
 const productoAL = new Producto("Cadbury Yogurt Frutilla", 170, 10,"Multimedia/cadbyrydefrutilla.jpg", "dulce", "noCeliaco", "chocolates")
 const productoAM = new Producto("CerealFort", 95, 30,"Multimedia/cerealfort.jpg", "dietetico", "noCeliaco", "barritas")
 const productoAN = new Producto("CerealMix", 90, 30,"Multimedia/cerealmix.webp", "dietetico", "noCeliaco", "barritas")
 const productoAO = new Producto("Chettos", 150, 10,"Multimedia/chettos.png", "salado", "noCeliaco", "snacks")
 const productoAP = new Producto("Chocolinas", 145, 10,"Multimedia/chocolinas.webp", "dulce", "noCeliaco", "galletitas")
 const productoAQ = new Producto("ChupaChups", 30, 15,"Multimedia/chupachups.jpg", "dulce", "celiaco", "chupetines")
 const productoAR = new Producto("Cofler Aireado Almendras", 220, 10,"Multimedia/cofleraireadoalmendras.jpg", "dulce", "noCeliaco", "chocolates")
 const productoAS = new Producto("Cofler Aireado Blanco", 220, 10, "Multimedia/cofleraireadoblanco.png", "dulce", "celiaco", "chocolates")
 const productoAT = new Producto("Cofler Aireado Leche", 220, 10, "Multimedia/cofleraireadoleche.png", "dulce", "celiaco", "chocolates")
 const productoAU = new Producto("Criollitas", 170, 10, "Multimedia/criollitas.webp", "salado", "noCeliaco", "galletitas")
 const productoAV = new Producto("Don Satur Dulces", 120, 20, "Multimedia/donsaturdulces.png", "dulce", "noCeliaco", "galletitas")
 const productoAW = new Producto("Don Satur Saladas", 120, 20, "Multimedia/donsatursaladas.png", "noCeliaco", "galletitas")
 const productoAX = new Producto("Doritos", 160, 10,"Multimedia/doritos.jpg", "salado", "noCeliaco", "snacks")
 const productoAY = new Producto("Dos Corazones", 80, 20,"Multimedia/doscorazones.jpg", "dulce", "celiaco", "bombones")
 const productoAZ = new Producto("Fantoche Blanco", 100, 30,"Multimedia/fantocheblanco.png", "dulce", "noCeliaco", "alfajores")
 const productoBA = new Producto("Fantoche Negro", 100, 30,"Multimedia/fantochenegro.webp", "dulce", "noCeliaco", "alfajores")
 const productoBC = new Producto("Ferrero Rocher", 50, 30,"Multimedia/ferrerorosher.webp", "dulce", "noCeliaco", "bombones")
 const productoBD = new Producto("Flics Menta", 45, 20,"Multimedia/flicsmenta.png", "dulce", "celiaco", "chicles")
 const productoBE = new Producto("Flics Tutti Frutti", 45, 20,"Multimedia/flicstuttifrutti.webp", "dulce", "celiaco", "chicles")
 const productoBF = new Producto("Flow Cereal", 90, 15,"Multimedia/flowcereal.webp", "dietetico", "noCeliaco", "barritas")
 const productoBG = new Producto("Flynn-Paff", 10, 30, "Multimedia/flynnpaff.webp", "dulce", "celiaco", "caramelos")
 const productoBH = new Producto("Full Mani", 200, 20, "Multimedia/fullmani.jpg", "dulce", "noCeliaco", "chocolates")
 const productoBI = new Producto("Guaymallen Blanco", 80, 30, "Multimedia/guaymallenblanco.png", "dulce", "noCeliaco", "alfajores")
 const productoBJ = new Producto("Guaymallen Membrillo", 80, 30, "Multimedia/guaymallenmembrillo.webp", "dulce", "noCeliaco", "alfajores")
 const productoBK = new Producto("Guaymallen Negro", 80, 30, "Multimedia/guaymallennegro.png", "dulce", "noCeliaco", "alfajores")
 const productoBL = new Producto("Lays", 160, 10,"Multimedia/lays.jpg", "salado", "noCeliaco", "snacks")
 const productoBM = new Producto("Marroc", 50, 20,"Multimedia/marroc.jpg", "dulce", "noCeliaco", "bombones")
 const productoBN = new Producto("Mellizas", 135, 15,"Multimedia/mellizas.webp", "dulce", "noCeliaco", "galletitas")
 const productoBO = new Producto("Menta Cristal", 6, 50,"Multimedia/mentacristal.png", "dulce", "celiaco", "caramelos")
 const productoBP = new Producto("Menta Cristal Fresh", 6, 50,"Multimedia/mentacristalfresh.webp", "dulce", "celiaco", "caramelos")
 const productoBQ = new Producto("Merengadas", 140, 30, "Multimedia/merengadas.jpg", "dulce", "noCeliaco", "galletitas")
 const productoBR = new Producto("Misky Masticables", 3, 50, "Multimedia/mickymasticables.jpg", "dulce", "celiaco", "caramelos")
 const productoBS = new Producto("Misky Eucalipto", 5, 100, "Multimedia/miskyeucalipto.png", "dulce", "celiaco", "gomitas")
 const productoBT = new Producto("Misky Fantasia", 3, 100, "Multimedia/miskyfantasia.jpg", "dulce", "celiaco", "gomitas")
 const productoBU = new Producto("Misky Jelly Roll", 4, 100, "Multimedia/miskyjellyroll.jpg", "dulce", "celiaco", "gomitas")
 const productoBV = new Producto("MisterPop Evolution", 25, 20,"Multimedia/misterpopevolution.webp", "dulce", "celiaco", "chupetines")
 const productoBW = new Producto("MisterPop Frutal", 12, 50,"Multimedia/misterpopsfrutal.webp", "dulce", "celiaco", "chupetines")
 const productoBX = new Producto("Mogul Ositos", 50, 20,"Multimedia/mogulositos.webp", "dulce", "celiaco", "gomitas")
 const productoBY = new Producto("Oreo", 140, 15,"Multimedia/oreo.jpg", "dulce", "noCeliaco", "galletitas")
 const productoBZ = new Producto("Palitos de la selva", 8, 40,"Multimedia/palitosdelaselva.jpg", "dulce", "celiaco", "caramelos")
 const productoCA = new Producto("Pepas Terepin", 180, 15, "Multimedia/pepasterepin.jpg", "dulce", "noCeliaco", "galletitas")
 const productoCB = new Producto("Pepitos", 150, 15, "Multimedia/pepitos.jpg", "dulce", "noCeliaco", "galletitas")
 const productoCC = new Producto("Picodulce", 18, 30, "Multimedia/picodulce.jpg", "dulce", "celiaco", "chupetines")
 const productoCD = new Producto("Rhodesia", 80, 20, "Multimedia/rodesia.jpg", "dulce", "noCeliaco", "barritas")
 const productoCE = new Producto("Rumba", 135, 20, "Multimedia/rumba.webp", "dulce", "noCeliaco", "galletitas")
 const productoCF = new Producto("Saladix Cross", 120, 15,"Multimedia/saladixcross.png", "noCeliaco", "snacks")
 const productoCG = new Producto("Saladix Hula Hula", 120, 15,"Multimedia/saladixhulahula.gif", "salado", "noCeliaco", "snacks")
 const productoCH = new Producto("Saladix Jamon", 120, 15,"Multimedia/saladixjamon.webp", "salado", "noCeliaco", "snacks")
 const productoCI = new Producto("Saladix Pizza", 120, 15,"Multimedia/saladixpizza.webp", "salado", "noCeliaco", "snacks")
 const productoCJ = new Producto("Serranas", 160, 10,"Multimedia/serranas.webp", "salado", "noCeliaco", "galletitas")
 const productoCK = new Producto("Shot", 90, 15, "Multimedia/shot.webp", "dulce", "noCeliaco", "chocolates")
 const productoCL = new Producto("Sonrisas", 120, 15, "Multimedia/sonrisas.webp", "dulce", "noCeliaco", "galletitas")
 const productoCM = new Producto("Sugus", 4, 50, "Multimedia/sugus.jpg", "dulce", "celiaco", "caramelos")
 const productoCN = new Producto("Surtido Bagley", 240, 10, "Multimedia/surtidobagley.webp", "dulce", "noCeliaco", "galletitas")
 const productoCO = new Producto("Surtido Diversion", 230, 10, "Multimedia/surtidodiversion.jpg", "dulce", "noCeliaco", "galletitas")
 const productoCP = new Producto("Surtido Terrabusi", 230, 10,"Multimedia/surtidoterrabusi.webp", "dulce", "noCeliaco", "galletitas")
 const productoCQ = new Producto("Terrabusi Dulce de leche", 145, 20,"Multimedia/terrabusidulcedeleche.webp", "dulce", "noCeliaco", "alfajores")
 const productoCR = new Producto("Tita", 80, 30,"Multimedia/tita.png", "dulce", "noCeliaco", "barritas")
 const productoCS = new Producto("Toblerone", 180, 10,"Multimedia/toblerone.webp", "dulce", "noCeliaco", "chocolates")
 const productoCT = new Producto("Tofi Blanco", 145, 10,"Multimedia/tofiblanco.jpg", "dulce", "noCeliaco", "alfajores")
 const productoCU = new Producto("Tofi Negro", 145, 10, "Multimedia/tofinegro.jpg", "dulce", "noCeliaco", "alfajores")
 const productoCV = new Producto("TopLine", 50, 20, "Multimedia/topline.jpg", "dulce", "celiaco", "chicles")
 const productoCW = new Producto("TopLine Seven", 120, 10, "Multimedia/toplineseven.png", "dulce", "celiaco", "chicles")
 const productoCX = new Producto("Traviata", 160, 10, "Multimedia/traviata.jpg", "salado", "noCeliaco", "galletitas")
 const productoCY = new Producto("Tri-Shot", 145, 10, "Multimedia/trishot.jpg", "dulce", "noCeliaco", "alfajores")
 const productoCZ = new Producto("Yummy Surtido", 45, 30,"Multimedia/yummysurtido.webp", "dulce", "celiaco", "gomitas")

 let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI, productoJ, productoK, productoL, productoM, productoN, productoO, productoP, productoQ, productoR, productoS, productoT, productoU, productoV , productoW, productoX, productoY, productoZ, productoAA, productoAB, productoAC, productoAD, productoAE, productoAF, productoAG, productoAH, productoAI, productoAJ, productoAK, productoAL, productoAM, productoAN, productoAO, productoAP, productoAK, productoAR, productoAS, productoAT,productoAU, productoAV, productoAW, productoAX, productoAY, productoAZ, productoBA, productoBC, productoBD,productoBE, productoBF, productoBG, productoBH, productoBI, productoBJ, productoBK, productoBL, productoBM, productoBN,productoBO, productoBP, productoBK, productoBR, productoBS, productoBT, productoBU, productoBV, productoBW, productoBX,productoBY, productoBZ, productoCA, productoCB, productoCC, productoCD, productoCE, productoCF, productoCG, productoCH,productoCI, productoCJ, productoCK, productoCL, productoCM, productoCN, productoAG, productoCO, productoCP, productoCQ,productoCR, productoCS, productoCT, productoCU, productoCV, productoCW, productoCX, productoCY, productoCZ]


let catalogoProductos = document.getElementById('catalogoProductos');

function render(lista){
    for(const producto of lista){

        if(producto.stock != 0){

            let card = document.createElement("div")

            card.innerHTML = `
          <div id="catalogoProductos">    
            <section id="products">
            <div class="container">
              <div class="mercaderia">
                    <div class="mercaderia-card ">
                        <div class="card item" id="imagenProducto">
                        <img class="card-img-top itemImage" src=${producto.image} alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text itemTitle">${producto.nombre}</p>
                                    <p class="itemPrice">$${producto.precio}</p>
                                    <p>${producto.stock}</p>
                                    <button class="item-button btn btn-primary addToCart" type="button">Agregar al Carrito</button>
                                    <span class="fa fa-circle" id="red"></span>
                                    <span class="fa fa-circle" id="teal"></span>
                                    <span class="fa fa-circle" id="blue"></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
          </div>
            `
         
            catalogoProductos.append(card)
    }

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
  addLocalStorage()
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

}
//LocalStorage (No funciona)
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

function loadCarrito(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    
  }
  
}
loadCarrito()
//Filtros y eventos
//BUSCARDOR
const formulario = document.querySelector("#formulario");
const botonBuscar = document.querySelector("#botonBuscar");

const filtrar = () => {
    catalogoProductos.innerHTML = " "
    const texto = formulario.value.toLowerCase();
    for (let producto of listaProductos) {
        let nombre = producto.nombre.toLowerCase();
         if(nombre.indexOf(texto) !== -1){
            catalogoProductos.innerHTML += `
            <div id="catalogoProductos">    
            <section id="products">
            <div class="container">
              <div class="mercaderia">
                    <div class="mercaderia-card ">
                        <div class="card item" id="imagenProducto">
                        <img class="card-img-top itemImage" src=${producto.image} alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text itemTitle">${producto.nombre}</p>
                                    <p class="itemPrice">$${producto.precio}</p>
                                    <p>${producto.stock}</p>
                                    <button class="item-button btn btn-primary addToCart" type="button">Agregar al Carrito</button>
                                    <span class="fa fa-circle" id="red"></span>
                                    <span class="fa fa-circle" id="teal"></span>
                                    <span class="fa fa-circle" id="blue"></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
          </div>
            ` 
         }
}
        if(catalogoProductos.innerHTML === " "){
            catalogoProductos.innerHTML += `<div><p>Producto no encontrado...</p></div>`
        }
}
botonBuscar.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

//SIDE BAR Y SUS FILTROS
render(listaProductos)
let botonCaramelos = document.getElementById("botonCaramelos")
let botonChupetines = document.getElementById("botonChupetines")
let botonGalletitas = document.getElementById("botonGalletitas")
let botonChocolates = document.getElementById("botonChocolates")
let botonGomitas = document.getElementById("botonGomitas")
let botonBombon = document.getElementById("botonBombon")
let botonSnacks = document.getElementById("botonSnacks")
let botonAlfajores = document.getElementById("botonAlfajores")
let botonBarritas = document.getElementById("botonBarritas")
let botonChicles = document.getElementById("botonChicles")

let botonDulce = document.getElementById("botonDulce")
let botonSalado = document.getElementById("botonSalado")
let botonDietetico = document.getElementById("botonDietetico")
let botonCeliaco = document.getElementById("botonCeliaco")

let botonMenos200 = document.getElementById("botonHasta200")
let boton200a500 = document.getElementById("boton200a500")
let botonMas500 = document.getElementById("botonMas500")


botonCaramelos.addEventListener("click", function(){filtrarCategoria("caramelos")})
botonChupetines.addEventListener("click", function(){filtrarCategoria("chupetines")})
botonGalletitas.addEventListener("click", function(){filtrarCategoria("galletitas")})
botonChocolates.addEventListener("click", function(){filtrarCategoria("chocolates")})
botonGomitas.addEventListener("click", function(){filtrarCategoria("gomitas")})
botonBombon.addEventListener("click", function(){filtrarCategoria("bombones")})
botonSnacks.addEventListener("click", function(){filtrarCategoria("snacks")})
botonAlfajores.addEventListener("click", function(){filtrarCategoria("alfajores")})
botonBarritas.addEventListener("click", function(){filtrarCategoria("barritas")})
botonChicles.addEventListener("click", function(){filtrarCategoria("chicles")})

botonDulce.addEventListener("click", function(){filtrarTipo("dulce")})
botonSalado.addEventListener("click", function(){filtrarTipo("salado")})
botonDietetico.addEventListener("click", function(){filtrarTipo("dietetico")})
botonCeliaco.addEventListener("click", function(){filtrarCeliaco("celiaco")})

botonMenos200.addEventListener("click", function(){filtrarPrecio("botonHasta200")})
boton200a500.addEventListener("click", function(){filtrarPrecio2("boton200a500")})
botonMas500.addEventListener("click", function(){filtrarPrecio3("botonMas500")})





function filtrarTipo(tipo){
    let lista = listaProductos.filter((producto) => producto.tipo == tipo)
    catalogoProductos.innerHTML = ""
    render(lista)
}

function filtrarCeliaco(celiaco){
    let lista = listaProductos.filter((producto) => producto.celiaco == celiaco)
    catalogoProductos.innerHTML = ""
    render(lista)
}

function filtrarCategoria(categoria){
    let lista = listaProductos.filter((producto) => producto.categoria == categoria)
    catalogoProductos.innerHTML = ""
    render(lista)
}

function filtrarPrecio(){
    let lista = listaProductos.filter((producto) => producto.precio <= 200)
    catalogoProductos.innerHTML = ""
    render(lista)
}

function filtrarPrecio2(){
    let lista = listaProductos.filter((producto) => producto.precio > 200 && producto.precio < 500)
    catalogoProductos.innerHTML = ""
    render(lista)
}

function filtrarPrecio3(){
    let lista = listaProductos.filter((producto) => producto.precio >= 500)
    catalogoProductos.innerHTML = ""
    render(lista)
}




 let precioTotal = 0;


 


//  function calculoDeStock(prod, cant) { 
//      if (prod.stock >= cant) { 
//          calculoPrecio(cant, prod.precio)
//          alert("El producto total es de: $" + (cant * prod.precio))
//          alert("Selecciono " + cant + " " + prod.nombre)
//      } else {
//         alert(`No disponemos de esa cantidad en stock. Nuestro stock actual es de: ${producto.stock} unidades`)
//      }
//  }

//  for (let i = 0; i < cantidad; i++) {
//      let compra = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n")).toLowerCase()
//      //verifico que ese producto existe comparando de la siguiente forma
//      for (let cadaProducto of listaProductos) { //para cada producto de tu lista
//          if (cadaProducto.nombre.toLowerCase() == compra) { //comparo si es igual al ingresado por el usuario y si existe
//              let cantidad = prompt("Ingrese la cantidad del producto que quiere comprar:") //recien ahi pregunto la cantidad
//              calculoDeStock(cadaProducto, cantidad) //y luego calculo stock pasando el OBJETO encontrado y la cantidad
//          }
//      }
//  }




//  function descuento(porcentaje) { //porcentaje es un numero del 0 al 100
//      precioTotal = precioTotal * (100 - porcentaje) / 100
//      alert("Recibiste un descuento del " + porcentaje + "% por tu compra")
//      alert("Gracias por su compra! Vuelva pronto!")
//  }


//  if (precioTotal > 0) {
//      switch (true) {
//          case precioTotal <= 200 && precioTotal >= 100:
//              descuento(5)
//              break;
//          case precioTotal <= 500 && precioTotal > 200:
//              descuento(15)
//              break;
//          case precioTotal <= 700 && precioTotal > 500:
//              descuento(25)
//              break;
//          case precioTotal > 700:
//              descuento(50)
//              break;
//          default:
//              console.log(precioTotal)
//              alert("No hay descuentos porque su compra es menor de $100")
//              alert("Gracias por su compra! Vuelva pronto!")
//              break;
//      }
//  }