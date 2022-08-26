const carrito = ["producto1", "producto2", "productoN"]

console.log(carrito)

const appContainer = document.querySelector("div")

appContainer.textContent = carrito.map(function(producto) {  
    return producto + ' /'
})


