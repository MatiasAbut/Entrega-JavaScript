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