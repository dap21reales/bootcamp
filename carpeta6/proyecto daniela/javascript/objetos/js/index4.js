





let promedio = 0

const estudiantes = {    
    estudiante1: {
        nombre: "Camilo",
        apellido: "Parada",
        notas: [5.0, 4.5, 3.0]
    },
    estudiante2: {
        nombre: "Camilo",
        apellido: "Quiñonez",
        notas: [2.5, 3.5, 3.0]
    },
    estudiante3: {
        nombre: "Karol",
        apellido: "Ariza",
        notas: [5.0, 3.5, 1.0]
    }
}

let llavesObjeto = Object.keys(estudiantes)

for(let llave of llavesObjeto){
    let nombre = estudiantes[llave].nombre
    let apellido = estudiantes[llave].apellido
    let notas = estudiantes[llave].notas

    
    for(let nota of notas){        
        promedio += nota
    }

    let divisor = notas.length
    
    promedio /= divisor
    alert("Hola " + nombre + " " + apellido)
    if (promedio >=0 && promedio <=2.9) {
        alert("tu promedio es:"+ ""+ promedio),
        alert("perdiste la materia")
    }
    if (promedio >=3 && promedio <=3.9) {
        alert("tu promedio es:"+ ""+ promedio),
        alert("pasaste la materia")
    }
    if(promedio >=4 && promedio <=5) {
        alert("tu promedio es:"+ ""+ promedio),
        alert("Pasaste la materia y ganaste un beca")
    }

    promedio = 0
}