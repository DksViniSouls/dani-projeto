const button = document.getElementById('botao');
const tbody = document.getElementById('_artigos');

           // Valores do artigoObj //
           
const titulo = document.querySelector('#titulo')
const texto = document.querySelector('#texto');
const capa = document.querySelector('#imagem64');

const artigoObj = {titulo:titulo.value, texto:texto.value,};

const btnNovoArtigo = document.getElementById('novoArtigo');

const novoTexto = document.getElementById('texto');

btnNovoArtigo.addEventListener('click', () => {

console.log(titulo.value);   
console.log(texto.value);

});

button.addEventListener('click', () => {
  function reqListener() {
    const response = this.responseText;

    const artigos = JSON.parse(response);

    let art = '';

    for (const artigo of artigos) {

      tbody.innerHTML += `<tr><td>${artigo.id}</td>
                          <td>${artigo.titulo}</td>
                          <td>${artigo.texto}</td>
                          <td>${artigo.data_hora}</td>
                          <td>${artigo.capa}</td></tr>`
    }

  }

  const req = new XMLHttpRequest();
  req.addEventListener('load', reqListener);
  req.open('GET', '/artigos');
  req.send('artigo');
 
});