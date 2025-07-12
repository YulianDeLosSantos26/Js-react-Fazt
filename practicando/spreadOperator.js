//Es un metodo al igual que concat pero de forma mas sencilla

//ejemplo 1
const names =['Yulian', 'Luis', 'Guillermo']
const newNames =['Lizbanna', 'Ashe ly', 'Holamundo',]

console.log([...names ,...newNames]) 

//Ejemplo 2 con Objetos

const user ={
    name: 'Yulian',
    lastname: 'Rafael'

}
const address = {
    city: 'Santo Domingo',
    street: 'main street 123',
    conutry: 'Republica Dominicana'
}

const userInfo = {
    ...user,
    ...address
}

console.log(user)
console.log(address)
console.log(userInfo)