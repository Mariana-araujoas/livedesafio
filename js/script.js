const form = document.getElementById('form')

form.addEventListener('',()=> {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let mail = document.getElementById('email').value;
    let data ={
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = '<p>Pronto...</p>'

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
}, 1000)

})

