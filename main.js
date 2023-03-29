const form = document.getElementById('form-ativ');
const imgAprovado = '<img src="./images/aprovado.png" alt="emijo celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emijo celebrando"/>';
const activity = [];
const notes = [];
const spanAproved = '<span class="resultado aprovado"> Aprovado </span>'
const spanReproved = '<span class="resultado reprovado"> Reprovado </span>'
const minimumNote = parseInt(prompt('Digite a nota mínima para o cálculo'));

let lines = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();


    createLine();
    updateTable();
    updateFinalAvarage();
});



function createLine() {
    const inputNameActivity = document.getElementById('nome-atividade');
    const inputNoteActivity = document.getElementById('nota-atividade');

    if (activity.includes(inputNameActivity.value)) {
      alert('Esta atividade já foi inserida!');
  }else{
    activity.push(inputNameActivity.value);
    notes.push(parseFloat(inputNoteActivity.value));
  
    let line = '<tr>';
    line += `<td>${inputNameActivity.value}</td>`;
    line += `<td>${inputNoteActivity.value}</td>`;
    line += `<td>${inputNoteActivity.value >= minimumNote ? imgAprovado : imgReprovado}</td>`;
    line += ``;
  
    lines += line;
  };

    
    inputNameActivity.value = '';
    inputNoteActivity.value = '';
};


function updateTable(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = lines;
};

function updateFinalAvarage() {
    const avarageFinal = calculateAvarageFinal();

    document.getElementById('avarage-final-value').innerHTML = avarageFinal;
    document.getElementById('avarage-final-result').innerHTML = avarageFinal >= minimumNote ? spanAproved : spanReproved;   
};

function calculateAvarageFinal() {
    let sumNotes = 0;

    for (let index = 0; index < notes.length; index++) {
        sumNotes += notes[index];  
    }

    const avarage = sumNotes/notes.length;
    const avarageFixed = avarage.toFixed(2);
    return parseFloat(avarageFixed);
};