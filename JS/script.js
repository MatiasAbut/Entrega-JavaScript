let nombreProductoA = "Caramelos";
let precioProductoA = 3;
let stockProductoA = 1000;

let nombreProductoB = "Chupetines";
let precioProductoB = 15;
let stockProductoB = 200;

let nombreProductoC= "Galletitas";
let precioProductoC = 70;
let stockProductoC = 30;

let nombreProductoD = "Chocolates";
let precioProductoD = 100;
let stockProductoD = 50;

let nombreProductoE = "Gomitas";
let precioProductoE = 2;
let stockProductoE = 2000;

let nombreProductoF = "Bombones";
let precioProductoF = 25;
let stockProductoF = 150;

let nombreProductoG = "Snacks";
let precioProductoG = 120;
let stockProductoG = 50;

let nombreProductoH = "Alfajores";
let precioProductoH = 80;
let stockProductoH = 100;

let nombreProductoI = "Barritas";
let precioProductoI = 150;
let stockProductoI = 30;

let nombreProductoJ = "Chicles";
let precioProductoJ = 10;
let stockProductoJ = 100;

alert("Bienvenido a La Carameleria! 😁")

let cantidad = parseint = (prompt ("Ingrese la cantidad de productos distintos que quiere comprar:"))

    if (cantidad <= 0 ){
        alert ("No ingresaste ninguna cantidad, porfavor ingrese la cantidad.")
    } 

let precioTotal = 0;



function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}

function calculoStock(cantidad, stock, precio){
        if(stock >= cantidad){
            calculoPrecio(cantidad, precio)
            alert("El producto total es de: $" + (cantidad * precio))
        }
        else{
            alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
        }
}

function sumaIva (precio){
    return precio * 0.21
}

for (let i = 0; i < cantidad; i++) {

let compra = prompt("Ingrese el nombre del producto que quiere comprar:  \n- Caramelos 🍬 \n- Chupetines 🍭 \n -Galletitas 🍪 \n -Chocolates 🍫 \n -Gomitas 🍡 \n -Bombones 🌰 \n -Snacks 🥜 \n -Alfajores 🍩 \n -Barritas 🥖 \n -Chicles 🍬").toLowerCase()

let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

switch (compra) {
    case "Caramelos".toLowerCase(): 
    calculoStock(cantidad1, stockProductoA, precioProductoA)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chupetines".toLowerCase(): 
    calculoStock(cantidad1, stockProductoB, precioProductoB)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Galletitas".toLowerCase(): 
    calculoStock(cantidad1, stockProductoB, precioProductoC)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chocolates".toLowerCase(): 
    calculoStock(cantidad1, stockProductoC, precioProductoD)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Gomitas".toLowerCase(): 
    calculoStock(cantidad1, stockProductoE, precioProductoE)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Bombones".toLowerCase(): 
    calculoStock(cantidad1, stockProductoF, precioProductoF)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Snacks".toLowerCase(): 
    calculoStock(cantidad1, stockProductoG, precioProductoG)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Alfajores".toLowerCase(): 
    calculoStock(cantidad1, stockProductoH, precioProductoH)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Barritas".toLowerCase(): 
    calculoStock(cantidad1, stockProductoI, precioProductoI)
    alert ("Selecciono " + cantidad1 + " " + compra)
    break;
    case "Chicles".toLowerCase(): 
    calculoStock(cantidad1, stockProductoJ, precioProductoJ)
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
        break;
    case precioTotal <= 500 && precioTotal > 200:
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% por tu compra")
        break;
    case precioTotal <= 700 && precioTotal > 500:
        precioTotal = precioTotal * 0.75
        alert("Recibiste un descuento del 25% por tu compra")
        break;
    case precioTotal > 700:
        precioTotal = precioTotal * 0.50
        alert("Recibiste un descuento del 50% por tu compra")
        break;
    default:
        console.log(precioTotal)
        alert("No hay descuentos porque su compra es menor de $100");
        break;
}

let precioTotalConImpuestos = sumaIva(precioTotal)

alert("Precio total con impuestos es: " + precioTotalConImpuestos)

alert("Gracias por su compra! Vuelva pronto!")


