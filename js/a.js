const button = document.getElementById('botao');
const tbody = document.getElementById('_artigos');

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