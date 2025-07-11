//Arrow Function o funciones flechas llegaron en ES6(2015) es 
// la forma mas corta y moderna de esribir funciones eb js.

//Dato extra si se usan llaves {} hay que usar return para devolver un resultado.

let suma = (x, y) => x + y;

console.log(suma(5, 5));

//Funcion tradicional

function sumando(x, y){
    return x + y;

}
console.log(sumando(5, 10));

//

const button = document.createElement('button')
 button.innerText = ('Click me')

  button.addEventListener('click', () => { 

    alert('Haz presionadon el boton')
 })
 document.body.append(button)


