https://image.tmdb.org/t/p/original/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg

fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f43a98ed1de78a8b8cd77799f7b683a4&language=pt-BR")
.then(response => {
    return response.json();
})
.then(data => {
    const randomNumber = Math.floor(Math.random() * 19);

    document.querySelector('#full-page').style.backgoundImage = 'url(https://image.tmdb.org/t/p/original' + data.results[randomNumber].backdrop_path + ')';

    const lancamentos = new Date('Jan 1, 2023 09:00:00').getTime();
    const hoje = new Date().getTime();

    const diferenca = lancamentos - hoje; 

    let days = diferenca / (1000 * 60 * 60 * 24);
    
    let hours = (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);

    let min = (diferenca % (1000 * 60 * 60) / (1000 * 60));

    let sec = (diferenca % (1000 * 60) / (1000 * 60));


    document.querySelector('#time-left').innerHTML = `<ul><li>${days}</li><li>${hours}</li><li>${min}</li><li>${sec}</li>`


})


