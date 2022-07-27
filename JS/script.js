 function Producto(nombre, precio, stock, imagen) {
     this.nombre = nombre
     this.precio = precio
     this.stock = stock
     this.imagen = imagen
     this.sumarIva = function (precio) {
         return precio * 0.21
     }
     this.sumarStock = function (cantidad) {
         this.stock += cantidad
     }
 }

 const productoA = new Producto("Caramelos", 3, 1000)
 const productoB = new Producto("Chupetines", 15, 200)
 const productoC = new Producto("Galletitas", 70, 30)
 const productoD = new Producto("Chocolates", 100, 50)
 const productoE = new Producto("Gomitas", 2, 2000)
 const productoF = new Producto("Bombones", 25, 150)
 const productoG = new Producto("Snacks", 120, 50)
 const productoH = new Producto("Alfajores", 80, 100)
 const productoI = new Producto("Barritas", 150, 30)
 const productoJ = new Producto("Chicles", 10, 100)

 let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI, productoJ]

 for (const producto of listaProductos) {
     if (producto.stock != 0) {

         let card = document.createElement("div")
         //Agregue esta parte de cards para agregar nombre, precio y stock (las imagenes todavia no se como agregarlas por eso todavia no lo hice) y queria saber que se le puede agregar para que no me haga el ciclo 4 veces sin que me haga una columna sola, es decir que cuando complete la fila baje el siguente producto a la fila de abajo. 
         card.innerHTML = `
    <section id="products">
    <div class="container">
      <div class="row mt-3">
            <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card">
                    <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>
                            <span class="fa fa-circle" id="red"></span>
                            <span class="fa fa-circle" id="teal"></span>
                            <span class="fa fa-circle" id="blue"></span>
                        </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4 col-11 offset-lg-0 offset-sm-2  offset-1">
                <div class="card">
                    <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>
                            <span class="fa fa-circle" id="red"></span>
                            <span class="fa fa-circle" id="teal"></span>
                            <span class="fa fa-circle" id="blue"></span>
                        </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card">
                    <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>
                            <span class="fa fa-circle" id="red"></span>
                            <span class="fa fa-circle" id="teal"></span>
                            <span class="fa fa-circle" id="blue"></span>
                        </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4 col-11 offset-sm-2 offset-lg-0 offset-1">
                <div class="card">
                    <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>
                            <span class="fa fa-circle" id="red"></span>
                            <span class="fa fa-circle" id="teal"></span>
                            <span class="fa fa-circle" id="blue"></span>
                        </div>
                </div>
            </div>
        </div>
    </div>`

         document.body.append(card)
     }
 }

 let nombresProductos = listaProductos.map((producto) => producto.nombre)

 alert("Bienvenido a La Carameleria! 😁")

 let cantidad = parseint = (prompt("Ingrese la cantidad de productos distintos que quiere comprar:"))

 if (isNaN(cantidad) || cantidad <= 0) {
     alert("No ingresaste ninguna cantidad, porfavor ingrese la cantidad.")
 }

 let precioTotal = 0;



 function calculoPrecio(cantidad, precio) {
     precioTotal += cantidad * precio;
 }


 function calculoDeStock(prod, cant) { //prod es el OBJETO que va a comprar y cant es la variable con la cantidad que luego ingresa
     if (prod.stock >= cant) { //verifico stock
         calculoPrecio(cant, prod.precio)
         alert("El producto total es de: $" + (cant * prod.precio))
         alert("Selecciono " + cant + " " + prod.nombre)
     } else {
         alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + prod.stock + " unidades")
     }
 }

 for (let i = 0; i < cantidad; i++) {
     let compra = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n")).toLowerCase()
     //verifico que ese producto existe comparando de la siguiente forma
     for (let cadaProducto of listaProductos) { //para cada producto de tu lista
         if (cadaProducto.nombre.toLowerCase() == compra) { //comparo si es igual al ingresado por el usuario y si existe
             let cantidad = prompt("Ingrese la cantidad del producto que quiere comprar:") //recien ahi pregunto la cantidad
             calculoDeStock(cadaProducto, cantidad) //y luego calculo stock pasando el OBJETO encontrado y la cantidad
         }
     }
 }




 function descuento(porcentaje) { //porcentaje es un numero del 0 al 100
     precioTotal = precioTotal * (100 - porcentaje) / 100
     alert("Recibiste un descuento del " + porcentaje + "% por tu compra")
     alert("Gracias por su compra! Vuelva pronto!")
 }


 if (precioTotal > 0) {
     switch (true) {
         case precioTotal <= 200 && precioTotal >= 100:
             descuento(5)
             break;
         case precioTotal <= 500 && precioTotal > 200:
             descuento(15)
             break;
         case precioTotal <= 700 && precioTotal > 500:
             descuento(25)
             break;
         case precioTotal > 700:
             descuento(50)
             break;
         default:
             console.log(precioTotal)
             alert("No hay descuentos porque su compra es menor de $100")
             alert("Gracias por su compra! Vuelva pronto!")
             break;
     }
 }