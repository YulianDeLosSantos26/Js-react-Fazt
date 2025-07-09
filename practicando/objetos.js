const user = {

    name: 'Elena',
    lastame: 'Jimenez',
    age: 21,
    address: { // otro ojeto
            country: "Republica Dominicana",
            city: "Santo Domingo",
            street: "main street 123",
    },

    friends: ["Yulian", "Rafael"],
    active: true,

    sendemail(){ // agregando funcion de ejemplo
        return "sending email...";
    },

};

console.log(user);

console.log(user.friends[1])

// si usamos puntos podemos llamar en este caso en consola las demas propiedades y funciones y arreglos dentro del objeto.