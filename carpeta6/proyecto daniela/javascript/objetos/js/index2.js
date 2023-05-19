//Añadiendo y eliminando propiedades de un objeto
const liber = {
    nombre: 'Liber',
    apellido: 'Zapata',
    email: 'liber@liber.com',
    "codigo estudiante": 4
}

liber.nombre = 'Carlos'
liber.apellido = 'Quintero'
liber.telefono = "123165132165165"
console.log(liber)
delete liber.telefono
console.log(liber)
