// Imagem  Base 64

function converterImagem() {

  let receberArquivo = document.getElementById('imagem').files;

  //console.log(receberArquivo);

  // Verifica se existe arquivo
  if (receberArquivo.length > 0) {

    // Carrega imagem
    let carregarImagem = receberArquivo[0];

    // FileReader - permite ler o conteudo do arquivo do computador do usuario
    let lerArquivo = new FileReader();

    // Onload ocorre qnd o obj é carregado
    lerArquivo.onload = function (arquivoCarregado) {

      // Converter imagem para base64
      let imagemBase64 = arquivoCarregado.target.result;
      console.log(imagemBase64)

      // Criar elemento html
      let novaImagem = document.createElement('img');

      // atribuir imagem para src
      novaImagem.src = imagemBase64;

      // Enviar imagem para o html
      document.getElementById("apresentar-imagem").innerHTML = novaImagem.outerHTML;

    };
    
    // Metodo usado para ler o conteudo
    lerArquivo.readAsDataURL(carregarImagem);

  };

};

const button = document.getElementById('botao');
const tbody = document.getElementById('_artigos');

// Valores do artigoObj //

const titulo = document.querySelector('#titulo')
const texto = document.querySelector('#texto');
const capa = document.querySelector('#imagem');

const artigoObj = { titulo: titulo.value, texto: texto.value, };


const btnNovoArtigo = document.getElementById('novoArtigo');

const novoTexto = document.getElementById('texto');

btnNovoArtigo.addEventListener('click', () => {

  const value = titulo.value;

  const value2 = texto.value;

  console.log(value);
  console.log(value2);

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