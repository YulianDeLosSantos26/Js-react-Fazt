 //Forma normal de hacer una funcion
 
 function start(){

    return 'Inicio...'
 }

console.log( start());


//Forma de hacer una funcion anonima

console.log( function(){
    return 'Inicio 2 ...'
 }());

 //Utilizar funciones anonimas se usa bastante cuando trabajamos con eventos.

 //Ejemplo de funciones anonimas usando eventos.
 const texto = document.createElement('h1')
 texto.innerText =('Practicando funciones anonimas')
 const button = document.createElement('button')
 button.innerText = ('Click me')

//Funcion anonima sencilla al lado del evento click con un alert
 button.addEventListener('click', function(){ 
     //addEventListener : Es uno de los muchos metodos que existen y este particular escucha un evento y ejecuta una funcion cuando ocurre.
     //Click: es el nombre de un evento y existen muchos otros mas.
    alert('Haz presionadon el boton')
 })

 document.body.append(texto)
 document.body.append(button)

 