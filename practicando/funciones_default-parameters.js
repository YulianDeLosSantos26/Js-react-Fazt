//Forma clasica de asignar parametros por defecto con condicionales

function suma(x, y){
    
    
    if (y === undefined){
        y = 0
    }
    return x + y;
}

console.log(suma(10)) 

//Segunda forma utilzando parametros por defecto

function resta( a = 5, b = 0){

    return a - b;

}

console.log(resta())

//Al utilizar parametros por defecto ya no utilizaremos condicionales sino que sera mas directo y nos dira NaN o undefined ya que le estamos pasando un parametro de que si no hay parametros por consola que devuelva
// por default el parametro para a de 5 y para b de 0, en caso de poner a saldra el valor si b no esta ya que le asignamos valor 0.