const form = document.getElementById('calculate');

let numberOne = document.getElementById('first-number');
let numbertwo = document.getElementById('second-number');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let result = numberOne.value-numbertwo.value;
    let messageFinal = `O Resultado da expressão é: ${result}`;
    
    
    if(numberOne.value<numbertwo.value){
        document.querySelector('.error').style.display = 'block';
    }else {
        const containerMessageFinal = document.getElementsByClassName('.final-result');
        containerMessageFinal.innerHTML = messageFinal;
    };



});