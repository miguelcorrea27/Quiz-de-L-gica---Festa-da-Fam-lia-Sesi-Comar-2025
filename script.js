
let tentativas = {};

function irPara(id) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function verificar(slideId, correta, proximoId) {
  const slide = document.getElementById(slideId);
  const feedback = slide.querySelector('.feedback');
  if (!tentativas[slideId]) tentativas[slideId] = 0;
  const botaoClicado = event.target.innerText.trim()[0];

  if (botaoClicado === correta) {
    irPara(proximoId);
    tentativas[slideId] = 0;
  } else {
    tentativas[slideId]++;
    feedback.textContent = 'ERROU';
    if (tentativas[slideId] >= 2) {
      irPara(proximoId);
      tentativas[slideId] = 0;
    }
  }
}

function verificarTextoFlex(slideId, proximoId, respostasAceitas) {
  const input = document.querySelector(`#${slideId} input`).value.trim().toLowerCase();
  const feedback = document.querySelector(`#feedback-${slideId.split('-')[1]}`);
  if (!tentativas[slideId]) tentativas[slideId] = 0;

  if (respostasAceitas.map(r => r.toLowerCase()).includes(input)) {
    irPara(proximoId);
    tentativas[slideId] = 0;
  } else {
    tentativas[slideId]++;
    feedback.textContent = 'ERROU';
    if (tentativas[slideId] >= 2) {
      irPara(proximoId);
      tentativas[slideId] = 0;
    }
  }
}

function reiniciar() {
  irPara('slide-p1');
}
