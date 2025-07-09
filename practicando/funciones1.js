function saludar(name){

    return function denuevo(){

        return ("Buenas tardes");
    }

}

console.log(saludar()());



//llamando a una funcion dentro de otra funcion