const ul = document.getElementById('_artigos');
const button = document.getElementById('botao');

button.addEventListener('click', () => {
  function reqListener() {
    ul.innerHTML = this.responseText;
    console.log(ul)
  
  }

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "dani");                                                                                                                                                                                                          
  req.send();

JSON.stringify(Array);

JSON.parse(String)

});
