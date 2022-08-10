let carrito = []

function addToCartClicked(id) {
  console.log(id);
  if (localStorage.getItem('carrito')) { 
    carrito = JSON.parse(localStorage.getItem('carrito')) 
    
  }
  let verification = carrito.find(e => e === id) 
  
  if (verification) { 
    carrito = carrito.filter(e => e !== id) 
  } else { 
    carrito.push(id)
  }
  
  localStorage.setItem('carrito', JSON.stringify(carrito)) 
  let productos = carrito.map(id => listaProductos.find(e => e.id === id)) 
  console.log(productos) 

  return productos 
 
  
}

function mostrarCarrito() {
  render(productos)
}



