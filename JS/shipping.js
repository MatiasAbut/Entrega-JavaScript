let carrito = []

function addToCartClicked(id) {
  console.log(id);
  if (localStorage.getItem('carrito')) { 
    carrito = JSON.parse(localStorage.getItem('carrito')) 
    
  }
  let verification = carrito.find(e => e === id) 
  
  if (verification) { 
    carrito = carrito.filter(e => e !== id) 
    Toastify({
      text: "Eliminado del carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
      }
    }).showToast();
  } else { 
    carrito.push(id)
    Toastify({
      text: "Agregado al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
      }
    }).showToast();
  }
  
  localStorage.setItem('carrito', JSON.stringify(carrito)) 
  let productos = carrito.map(id => listaProductos.find(e => e.id === id)) 
  console.log(productos) 

  return productos 
 
  
}

function mostrarCarrito() {
  render(productos)
}



