const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 6 },
    { nome: "Lucas", nota: 4 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));