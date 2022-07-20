function Producto (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.sumarIva = function (precio){
        return precio * 0.21
    }
    this.sumarStock = function (cantidad) {this.stock += cantidad}
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

let nombresProductos = []

function listaProductosS(){
    for(const producto of listaProductos){
        nombresProductos.push(producto.nombre)
    }
}

listaProductosS()

alert("Bienvenido a La Carameleria! 😁")

let cantidad = parseint = (prompt ("Ingrese la cantidad de productos distintos que quiere comprar:"))

    if (cantidad <= 0 ){
        alert ("No ingresaste ninguna cantidad, porfavor ingrese la cantidad.")
    } 

let precioTotal = 0;



function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}

function calculoStock(cantidad, producto){
        if(producto.stock >= cantidad){
            calculoPrecio(cantidad, producto.precio)
            alert("El producto total es de: $" + (cantidad * producto.precio))
        }
        else{
            alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + producto.stock + " unidades")
        }
}



for (let i = 0; i < cantidad; i++) {

let compra = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n")).toLowerCase()

let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

switch (compra) {
    case "Caramelos".toLowerCase(): 
    calculoStock(cantidad1, productoA)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chupetines".toLowerCase(): 
    calculoStock(cantidad1, productoB)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Galletitas".toLowerCase(): 
    calculoStock(cantidad1, productoC)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chocolates".toLowerCase(): 
    calculoStock(cantidad1, productoD)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Gomitas".toLowerCase(): 
    calculoStock(cantidad1, productoE)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Bombones".toLowerCase(): 
    calculoStock(cantidad1, productoF)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Snacks".toLowerCase(): 
    calculoStock(cantidad1, productoG)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Alfajores".toLowerCase(): 
    calculoStock(cantidad1, productoH)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Barritas".toLowerCase(): 
    calculoStock(cantidad1, productoI)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chicles".toLowerCase(): 
    calculoStock(cantidad1, productoJ)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    default:
        alert("No tenemos ese producto")
    break;
}
}

switch (true){
    case precioTotal <= 200 && precioTotal >= 100:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        alert("Gracias por su compra! Vuelva pronto!")
        break;
    case precioTotal <= 500 && precioTotal > 200:
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% por tu compra")
        alert("Gracias por su compra! Vuelva pronto!")
        break;
    case precioTotal <= 700 && precioTotal > 500:
        precioTotal = precioTotal * 0.75
        alert("Recibiste un descuento del 25% por tu compra")
        alert("Gracias por su compra! Vuelva pronto!")
        break;
    case precioTotal > 700:
        precioTotal = precioTotal * 0.50
        alert("Recibiste un descuento del 50% por tu compra")
        alert("Gracias por su compra! Vuelva pronto!")
        break;
    default:
        console.log(precioTotal)
        alert("No hay descuentos porque su compra es menor de $100")
        alert("Gracias por su compra! Vuelva pronto!")
        break;
}

// let precioTotalConImpuestos = sumaIva(precioTotal)

alert("Precio total con impuestos es: " + precioTotalConImpuestos)



