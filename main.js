const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoA = parseInt(document.getElementById("campoA").value);
  const campoB = parseInt(document.getElementById("campoB").value);

  if (campoB > campoA) {
    mensagem.textContent = "Formulário válido!";
  } else {
    mensagem.textContent = "Formulário inválido! Campo B deve ser maior que campo A.";
  }
});
