const ul = document.getElementById('artigos');
const button = document.getElementById('botao');

button.addEventListener('click', () => {
  function reqListener() {
    ul.innerHTML = this.responseText;
   
    console.log(ul)

    const banco = JSON.parse(this.responseText);
      console.log(banco);
  
  }

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "dani");                                                                                                                                                                                                          
  req.send();

//const result = '["id","titulo","texto","data_hora","capa"]';

});
