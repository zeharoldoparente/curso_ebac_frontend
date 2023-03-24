const form = document.getElementById("calculate");

let numberOne = document.getElementById("first-number");
let numbertwo = document.getElementById("second-number");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let result = numberOne.value - numbertwo.value;
  const mensagemFinal = `O resultado da expressão é: <b>${result}</b> `;

  if (numberOne.value < numbertwo.value) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.final-result').style.display = 'none';
  } else {
    const containerMensagemFinal = document.querySelector(".final-result");
    containerMensagemFinal.innerHTML = mensagemFinal;
  }
});