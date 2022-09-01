let i = 0;
var content;
var obj;
var itens;
var inputResp = document.querySelectorAll('input');

window.onload = function conecta() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function (e) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      content = xhttp.responseText;
    } else {
      var err0 = xhttp.statusText;
    }
  };
  xhttp.open('GET', 'https://quiz-trainee.herokuapp.com/questions', true);
  xhttp.send();
};

function inicializa() {
  obj = JSON.parse(content);
}

function mostrarQuestao() {
  inicializa();
  document.getElementById('listaRespostas').style.display = 'block';
  document.getElementById('confirmar').textContent = 'Próxima pergunta';
  perguntas();
  validResposta();
}

//colocando as perguntas na tela, ta feito pae
function perguntas() {
  inicializa();
  document.getElementById('titulo').textContent = obj[i].title;
  itens = document.querySelectorAll('span');
  itens.forEach((item, index) => {
    item.textContent =
      obj[i].options[index].answer + ' ' + obj[i].options[index].value;
    console.log(obj[i].options[index].value);
  });
  i++;
}

function handleClick({ target }) {
  if (target.nextElementSibling.innerText.endsWith('3')) {
    console.log('Correta');
  } else {
    console.log('Errada');
  }
}

function validResposta() {
  inicializa();
  inputResp.forEach((input) => {
    input.addEventListener('click', handleClick);
  });
}
