const body = document.querySelector ('body')
const span = document.createElement ('span')

body.style.height = '100vh'
body.innerHTML = "<h1>Soy un encabezado h1 generado desde JS<h1>"
body.innerHTML = "<h1>Un nuevo contenido</h1>"
span.innerText = "Hola soy un span nodo"

body.appendChild (span)

