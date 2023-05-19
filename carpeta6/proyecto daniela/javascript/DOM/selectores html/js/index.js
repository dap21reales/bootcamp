const etiquetah1 = document.querySelector('h1')
const parrafo = document.querySelector('#parrafo')
const boton = document.querySelector('.boton')
const enlace = document.querySelector('.enlace')


boton.addEventListener ('click', function(){
    etiquetah1.innerHTML = "Nuevo valor"
    parrafo.innerHTML = "Nuevo contenido"
})