const button = document.createElement('button')
 button.innerText = ('Click me')

const authorize = true;
 button.addEventListener('click', () => { 
     
    if(authorize){

        return alert('Esta autorizado')
    }
    alert('No esta autorizado')
 })

 document.body.append(button)

 