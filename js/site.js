// Evento de scroll da página
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50)
      navbar.classList.add('scrolled')
    else
      navbar.classList.remove('scrolled');

})

// Opções de acesso a API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDhlMjMyYzk0NjEyNjlkMTk3NGE2NjQxZjZjZDQzYiIsIm5iZiI6MTczMjIwNzgwMi4yMTM0NTg4LCJzdWIiOiI2NzNmNjBjNDg3MDgxYzcyNWE5NzIxYjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uSVqFeYcHec9RcTL2iJfNZ4qGiyl54W-PigTEV70FQg'
    }
};
