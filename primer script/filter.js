const personal = [
{'nombre': 'Julian', 'edad': 32, 'puesto': 'bakend'},
{'nombre': 'Gonzalo', 'edad': 22, 'puesto': 'Frontend'},
{'nombre': 'Lesi', 'edad': 21, 'puesto': 'DevOps'},
{'nombre': 'Gabi', 'edad': 25, 'puesto': 'NoCode'}
]

const mayor = personal.filter(persona =>{
    return persona.edad >= 22
})
console.log(mayor)