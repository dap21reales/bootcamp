let datosCompletos = false
let nombre = prompt("Ingrese su nombre")
alert (nombre)
if(nombre != ""){
    alert( "Ingresaste el nombre" + nombre)
}
let apellido = prompt("Ingrese su apellido")
alert (apellido)
if(apellido != ""){
    alert("El apellido es necesario")
}
let textoEdad = prompt("Ingrese su edad")
let edad= number(textoEdad)
alert(typeof edad)
if(edad >=18){
    document.write("Bienvenido al bar BIT")
} else {
    alert("Eres menor de edad y no puedes ingresar al sitio" )
}