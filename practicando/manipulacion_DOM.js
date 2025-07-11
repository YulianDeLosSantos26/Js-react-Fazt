//Manipulacion del DOM
//Usando js puro para el html

const title = document.createElement('h1')
const button = document.createElement('button')

title.innerText = "HTML desde JS"

button.innerText = "Click";
//Usando uno de los tipos de eventos que existen en el boton
button.addEventListener('click', function(){

    title.innerText = 'Texto actualizado con una funcion dentro del dom en JS'
    title.style.color = "lightblue";

    alert('Se actualizo correctamente')
    


})



document.body.append(title)
document.body.append(button)