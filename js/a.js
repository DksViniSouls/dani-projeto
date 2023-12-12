const ul = document.getElementById('_artigos');
const button = document.getElementById('botao');

button.addEventListener('click', () => {
  function reqListener() {
    const response = this.responseText;

    const artigos = JSON.parse(response);

    let art = '';

    for (const artigo of artigos) {

      ul.innerHTML += `<li class="tag is-primary is-light">${artigo.titulo}</li>`

      //art = `titulo:${artigo.titulo}\n`
    }

    console.log(art);

  }

  const req = new XMLHttpRequest();
  req.addEventListener('load', reqListener);
  req.open('GET', '/artigos');
  req.send('artigo');

});