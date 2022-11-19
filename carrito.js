/* const carrito = document.getElementById("carrito")
const carritoTemplate = document.getElementById("carritoTemplate")
const carritoFragmento = document.createDocumentFragment()    // puedo poner = new DocumentFragment() 
const botonesAgregar = document.querySelectorAll("article button")

const carritoObjeto = {}


const agregarFruta = (e) =>{       
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1 
    }
    
    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1
    }
    
    carritoObjeto[producto.id] = producto
        
    pintarCarrito()
}


botonesAgregar.forEach((boton) => boton.addEventListener("click",agregarFruta))



const pintarCarrito = () =>{
    carrito.textContent=""
    Object.values(carritoObjeto).forEach(item =>{
        const cloneTemplate = carritoTemplate.content.firstElementChild.cloneNode(true)
        cloneTemplate.querySelector(".lead").textContent = item.titulo
        cloneTemplate.querySelector(".badge").textContent = item.cantidad
        carritoFragmento.appendChild(cloneTemplate)
    })

    carrito.appendChild(carritoFragmento)
}
 */
const contenedor = document.querySelector(".container")

contenedor.addEventListener("click",e =>{
    if(e.target.id === "padre"){
        console.log("click en Padre")
    }

    if(e.target.matches("#hijo")){
        console.log("click en Hijo")
    }

    if(e.target.dataset["div"] === "divnieto"){
        console.log("click en Nieto")
    }
})
