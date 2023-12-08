const ul = document.getElementById('_artigos');
const button = document.getElementById('botao');

button.addEventListener('click', () => {
  function reqListener() {
    ul.innerHTML = this.responseText;

    console.log(ul)

    const artigos = JSON.parse(this.responseText);

    for (const artigo of artigos) {
      
      document.innerHTML()

      console.log(artigos.artigo);
    }
  }

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "/artigos");
  req.send('artigo');


});