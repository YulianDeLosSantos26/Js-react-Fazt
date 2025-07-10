
const user = {

    name: 'Elena',
    lastame: 'Jimenez',
    age: 21,
    address: { // otro objeto
            country: "Republica Dominicana",
            city: "Santo Domingo",
            street: "main street 123",
    },
        //elvecino: `El vecino ${this.age}`, esta es una forma de acceder a un valor de una propiedad.
    friends: ["Yulian", "Rafael"],
    active: true,

    sendemail: function(){ // agregando funcion de ejemplo
    
        // console.log(`El vecino ${this.age}`)

         return "sending email...";
    },
    
};

console.log(user);

console.log(user.friends[1])

console.log(user.sendemail());

//console.log(user.elvecino)


// si usamos puntos podemos llamar en este caso en consola las demas propiedades y funciones y arreglos dentro del objeto.