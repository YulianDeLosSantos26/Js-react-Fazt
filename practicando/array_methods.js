const names = ['Rosa', 'Yulian', 'Luis']

// for (let i = 0; i< names.length; i++) {
//     const element = names[i];
//     console.log(element)
    
// }

// //USANDO FOREACH
// names.forEach(function(name){
//     console.log(name);

// })
 
 //USANDO.MAP
 //.MAP: sirve para para cambiar el formato, calcular nuevos valores, 
 // o realizar cualquier tipo de transformación en cada elemento de un array.
// const newNames = names.map(function(name){
//     return  `Hola ${name}`

// })
// console.log(names)
// console.log(newNames)

//Metodo .FIND
//Sirve para lo mismo solo que al recorrer puedo poner una condicion.

//  const namesFound = names.find(function(name){

//     if (name === 'Luis')
//         return name

// })
// console.log(namesFound)

//Metodo .filter
//Esta función no modifica el array original, sino que crea una copia con los elementos filtrados. 
 const namesFilter = names.filter(function(name){

    if (name !== 'Yulian' || name === 'Rosa')
        return name

})
console.log(names)
console.log(namesFilter)











 