const carrito = document.getElementById("carrito")
const footer = document.getElementById("footer")
const carritoTemplate = document.getElementById("carritoTemplate")
const footerTemplate = document.getElementById("footerTemplate")
const fragmento = document.createDocumentFragment()    // puedo poner = new DocumentFragment() 



document.addEventListener("click",(e)=>{
    if(e.target.matches(".card .btn-outline-primary")){
        agregarAlCarrito(e)
    }

    if(e.target.matches(".list-group-item .btn-success")){
        aumentarFruta(e)
    }
    if(e.target.matches(".list-group-item .btn-danger")){
        disminuirFruta(e)
    }

})



const carritoObjeto = []

const agregarAlCarrito = (e) =>{       
   
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        precio: parseInt(e.target.dataset.precio),
        cantidad: 1 
    }
    
    const index = carritoObjeto.findIndex((item)=> item.id === producto.id)

    if(index === -1){        
        carritoObjeto.push(producto)        
    }
    else{        
        carritoObjeto[index].cantidad ++        
    }  
    pintarCarrito()
}



const pintarCarrito = () =>{
    
    carrito.textContent=""
    footer.textContent=""
    carritoObjeto.forEach(item =>{
        if(item.cantidad >0){
       
        const cloneTemplate = carritoTemplate.content.cloneNode(true)
        cloneTemplate.querySelector(".fruta").textContent = item.titulo
        cloneTemplate.querySelector(".badge").textContent = item.cantidad

        
        cloneTemplate.querySelector("li p span.precio").textContent = item.precio * item.cantidad
        cloneTemplate.querySelector("div .btn-danger").dataset.id = item.id
        cloneTemplate.querySelector("div .btn-success").dataset.id = item.id

        fragmento.appendChild(cloneTemplate)
        }
    })

    carrito.appendChild(fragmento)
    pintarFooter()
    
}

const aumentarFruta = (e)=>{
    const index = carritoObjeto.findIndex((item)=> item.id === e.target.dataset.id)
    carritoObjeto[index].cantidad++ 
    pintarCarrito()
}

const disminuirFruta = (e)=>{
    const index = carritoObjeto.findIndex((item)=> item.id === e.target.dataset.id)
    if(carritoObjeto[index].cantidad > 0){
        carritoObjeto[index].cantidad-- 
    }    
    pintarCarrito()
}


const pintarFooter = ()=>{
    footer.textContent=""

    const precioTotal = carritoObjeto.reduce((acumulador,elementoActual) => acumulador + (elementoActual.cantidad * elementoActual.precio),0)     
    const cloneTemplate = footerTemplate.content.cloneNode(true)
    
    if(precioTotal > 0){
        cloneTemplate.querySelector("div p .precioTotal").textContent = precioTotal    


        fragmento.appendChild(cloneTemplate)
        footer.appendChild(fragmento)
    }
}




