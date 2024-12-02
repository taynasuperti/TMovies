 const params = new URLSearchParams(window.location.search);
 const id = params.get('id');
 const media = params.get('media');
//  console.log("Id: ", id, " - Media: ", media);

// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    await getMovie();
})

async function getMovie() {
    let movie;
    let baseUrl = 'https://api.themoviedb.org/3/'
    await fetch(`${baseUrl}${media}/${id}?language=pt-br`, options)
        .then(res => res.json())
        .then(res => movie = res)
        .catch(err => console.log('Erro ao carregar filme', err));
    // console.log(movie);

    // Poster
    document.querySelector('.poster').src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    // Detalhes do Filme
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `<h1>${movie.title ?? movie.name}</h1>
        <h5 class='mb-4'><b>Título Original: </b> 
            ${movie.original_title ?? movie.original_name}</h5>
        <p class='mb-3'><b>Data de Estreia: </b>
            ${movie.release_date}</p>
        <p class='mb-3'><b>País de Origem: </b>
            ${movie.origin_country}</p>
        <p class='mb-3'><b>Popularidade: </b>
            ${movie.popularity.toFixed(1)}</p>
        <p class='mb-3'><b>Status: </b> ${movie.status}</p>
        <p>${movie.overview}</p>`;
    
    movie.genres.forEach(genre => {
        detalhes.innerHTML += `<button class='btn btn-lg button-orange me-2 ${genre.name}'>
        ${genre.name}</button>`
    })


    // Busacar o Trailer
    let trailer;
    await fetch(`${baseUrl}${media}/${id}/videos?language=pt-br`, options)
        .then(res => res.json())
        .then(res => trailer = res.results) // Armazena os trailers retornados
        .catch(err => console.log('Erro ao carregar trailers', err));
    // console.log(trailer);

    if (trailer.length > 0) {
        document.querySelector('iframe').src = `https://www.youtube.com/embed/${trailer[0].key}`
    } else {
        document.querySelector('#trailer').style.display = 'nome';
    }

    // Buscar o Elenco
    let elenco;
    await fetch(`${baseUrl}${media}/${id}/credits?language=pt-br`, options)
        .then(res => res.json())
        .then(res => elenco = res.cast)
        .catch(err => console.log('Erro ao carregar elenco', err));
    console.log(elenco); 
    
    let elencoContainer = document.querySelector('#elenco');
    elencoContainer.innerHTML = '';
    for (let i = 0; i < elenco.length; i++) {
       let foto = elenco[i].profile_path ? `https://image.tmdb.org/t/p/original/${elenco[i].profile_path}`
       : 'img/sem-foto.jpg';
    elencoContainer.innerHTML +=
        `<div class='col-lg-4 col-sm-6'>
            <div class= 'row'>
                <div class='col-lg-3 mb-3'>
                    <img class="w-100 rounded-3" src="${foto}">
                </div>
                <div class= 'col-lg-9 mb-3'>
                    <h4>${elenco[i].original_name}</h4>
                    <p>${elenco[i].character}</p>
                </div>
            </div>    
        </div>`;
        
    }

}