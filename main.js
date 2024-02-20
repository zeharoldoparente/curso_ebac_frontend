const alunos = [
   { nome: "João", nota: 8 },
   { nome: "Maria", nota: 5 },
   { nome: "Pedro", nota: 7 },
   { nome: "Ana", nota: 6 },
   { nome: "Lucas", nota: 9 },
];

function alunosAprovados(arrayDeAlunos) {
   return arrayDeAlunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
