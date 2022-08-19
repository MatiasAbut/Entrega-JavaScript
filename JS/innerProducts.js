function render(lista) { 
  for (const producto of lista) { 
    (producto.stock != 0) && ( 
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
                        <button class="item-button btn btn-primary addToCart button" onClick="addToCartClicked('${producto.id}')">Agregar al Carrito</button>
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
    )
  }
}

render(listaProductos)

//Filtros y eventos
//BUSCARDOR
const formulario = document.querySelector("#formulario");
const botonBuscar = document.querySelector("#botonBuscar");

const filtrar = () => {
  catalogoProductos.innerHTML = " "
  const texto = formulario.value.toLowerCase();
  for (let producto of listaProductos) {
    let nombre = producto.nombre.toLowerCase();
    (nombre.indexOf(texto) !== -1) && (
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
          </div>
            `
    )
  }
  (catalogoProductos.innerHTML === " ") && (catalogoProductos.innerHTML += `<div><p>Producto no encontrado...</p></div>`)
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


botonCaramelos.addEventListener("click", function () {
  filtrarCategoria("caramelos")
})
botonChupetines.addEventListener("click", function () {
  filtrarCategoria("chupetines")
})
botonGalletitas.addEventListener("click", function () {
  filtrarCategoria("galletitas")
})
botonChocolates.addEventListener("click", function () {
  filtrarCategoria("chocolates")
})
botonGomitas.addEventListener("click", function () {
  filtrarCategoria("gomitas")
})
botonBombon.addEventListener("click", function () {
  filtrarCategoria("bombones")
})
botonSnacks.addEventListener("click", function () {
  filtrarCategoria("snacks")
})
botonAlfajores.addEventListener("click", function () {
  filtrarCategoria("alfajores")
})
botonBarritas.addEventListener("click", function () {
  filtrarCategoria("barritas")
})
botonChicles.addEventListener("click", function () {
  filtrarCategoria("chicles")
})

botonDulce.addEventListener("click", function () {
  filtrarTipo("dulce")
})
botonSalado.addEventListener("click", function () {
  filtrarTipo("salado")
})
botonDietetico.addEventListener("click", function () {
  filtrarTipo("dietetico")
})
botonCeliaco.addEventListener("click", function () {
  filtrarCeliaco("celiaco")
})

botonMenos200.addEventListener("click", function () {
  filtrarPrecio("botonHasta200")
})
boton200a500.addEventListener("click", function () {
  filtrarPrecio2("boton200a500")
})
botonMas500.addEventListener("click", function () {
  filtrarPrecio3("botonMas500")
})





function filtrarTipo(tipo) {
  let lista = listaProductos.filter((producto) => producto.tipo == tipo)
  catalogoProductos.innerHTML = ""
  render(lista)
}

function filtrarCeliaco(celiaco) {
  let lista = listaProductos.filter((producto) => producto.celiaco == celiaco)
  catalogoProductos.innerHTML = ""
  render(lista)
}

function filtrarCategoria(categoria) {
  let lista = listaProductos.filter((producto) => producto.categoria == categoria)
  catalogoProductos.innerHTML = ""
  render(lista)
}

function filtrarPrecio() {
  let lista = listaProductos.filter((producto) => producto.precio <= 200)
  catalogoProductos.innerHTML = ""
  render(lista)
}

function filtrarPrecio2() {
  let lista = listaProductos.filter((producto) => producto.precio > 200 && producto.precio < 500)
  catalogoProductos.innerHTML = ""
  render(lista)
}

function filtrarPrecio3() {
  let lista = listaProductos.filter((producto) => producto.precio >= 500)
  catalogoProductos.innerHTML = ""
  render(lista)
}


let precioTotal = 0;

//////////////////////

fetch("data.json")
.then((response) => response.json())
.catch((error) => console.log(error))
.then((data) =>
{
  for(const producto of data){
    listaProductos.push(new Producto(producto.id,producto.nombre, producto.precio, producto.stock, producto.image, producto.tipo, producto.celiaco, producto.categoria))
  }
  render(lista)
  }
)
