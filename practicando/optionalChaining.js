const person = {
    name: 'Yulian',
    address: {
        city: 'London'
    }
}

console.log(person.location?.city)

//usar el ? en la propiedad que no existe, sirve para que no de error sino que devuelva undefined y verifique si existe o no, city
