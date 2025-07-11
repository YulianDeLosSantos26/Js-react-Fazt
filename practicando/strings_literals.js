const background = '#303030'
const color = 'white'
const authorize= true;


 const button = document.createElement('button')
 button.innerText = ('Click me')
 button.style = `background: ${background}; color: ${color}`


 button.addEventListener('click', () => { 
     
    if(authorize){

        return alert('Esta autorizado')
    }
    alert('No esta autorizado')
 })
//usando operador ternario y strings literal
//   const resultado = `estos son sumas: ${authorize ? 'autorizado':  'no autorizado'}` 
//  console.log(resultado);
 
 document.body.append(button)

 