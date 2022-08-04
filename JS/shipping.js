let carrito = []

function render(lista) { //ESTA FUNCION ES MUY LARGA => NO ES BUENA PRACTICA => TE LA CORTÉ
  for(const producto of lista) { //LO OPTIMO ES USAR UN FOREACH PERO DEJALO ASI, CUANDO TENGAS TIEMPO LO CAMBIAS
    if(producto.stock != 0) { //hice un inner mas directo (sin la creacion)
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
                      <button class="item-button btn btn-primary addToCart" onClick="addToCartClicked('${producto.id}')">Agregar al Carrito</button>
                      <span class="fa fa-circle" id="red"></span>
                      <span class="fa fa-circle" id="teal"></span>
                      <span class="fa fa-circle" id="blue"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>`
    }
  }
}

render(listaProductos)

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
//agregue ONCLICK al mapeo de las cards (POSTA ES MAS FACIL LABURARLO ASI)