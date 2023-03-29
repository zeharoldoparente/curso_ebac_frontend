const form = document.getElementById('form-ativ');
const imgAprovado = '<img src="./images/aprovado.png" alt="emijo celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emijo celebrando"/>';
const activity = [];
const notes = [];
const spanAproved = '<span class="resultado aprovado"> Aprovado </span>'
const spanReproved = '<span class="resultado reprovado"> Reprovado </span>'

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

    activity.push(inputNameActivity.value);
    notes.push(parseFloat(inputNoteActivity.value));

    let line = '<tr>';
    line += `<td>${inputNameActivity.value}</td>`;
    line += `<td>${inputNoteActivity.value}</td>`;
    line += `<td>${inputNoteActivity.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    line += ``;

    lines += line;
    
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
    document.getElementById('avarage-final-result').innerHTML = avarageFinal >= 7 ? spanAproved : spanReproved;
    
}

function calculateAvarageFinal() {
    let sumNotes = 0;

    for (let index = 0; index < notes.length; index++) {
        sumNotes += notes[index];
        
    }

    return sumNotes/notes.length;
}