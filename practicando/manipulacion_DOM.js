const title = document.createElement('h1')
title.innerText = 'hola mundo desde js'

const button = document.createElement('button')
    button.innerText = 'click'

button.addEventListener('click', function(){

    title.innerText = 'Texto actualizado con JS'
    alert('se realizo un click');

})

document.body.append(title);
document.body.append(button);