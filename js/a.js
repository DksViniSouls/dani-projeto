const ul = document.getElementById('artigos');
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

//const result = ["id","titulo","texto","data_hora","capa"];

const banco = JSON.parse(result);
console.log(result);

const parajson = JSON.stringify(banco);
console.log(parajson);

});
