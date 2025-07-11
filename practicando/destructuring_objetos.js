//Como utilizar un objeto que va a ser utilizado en el DOM con una funcion

const user = {

    name: 'Yulian',
    age: 30
}

//function printInfo(user){

    //Forma de acceder a los elementos con notacion punto .
    //return '<h1>Hola ' + user.name+ '</h1>'

    //Otra forma de acceder a los elementos o propiedades utilizando corchetes
    // return '<h1>Hola ' + user['name']+ '</h1>'

    //Usando la forma destructuring directamente desde el parametro 

    //function printInfo({name}){ //decirle directo estoy esperando un objeto {} y dentro 
    // de las llaves la propiedad del objeto y debajo en el return la propiedad concatenada con el parametro name.

         //return '<h1>Hola ' + name + '</h1>'

    //Otra forma destructuring con el objeto completo extrayendo sus valores, para destructurrar no solo es con los parametros sino en cualquier parte del codigo con esta sintaxis
    function printInfo(user){

       const  {name, age} = user;

       console.log(name, age);

         return '<h1>Hola ' + name + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = (printInfo(user))

//FORMA SIMPLE DE PONER HTML EN EL DOCUMENT

    //document.body.innerHTML = '<h2>Sencillo</h2>'


