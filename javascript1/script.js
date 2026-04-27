let lista_alunos = [];

function CriaAluno() {
    let aluno = new Aluno
    return aluno
}

class Aluno {
    constructor(nome,matricula) {
        this.nome = nome
        this.matricula = matricula
    }
    AddNome(oNome) {
        this.nome = oNome
    }
    AddMatricula(aMatricula) {
        this.matricula = aMatricula
    }
    EncontraAluno(aMatricula,aLista,oAluno) {
        let verificador = aLista.find(oAluno.matricula)
    }

}

const sistema = () => {
    console.log("Menu:")
    console.log("1 - Adicionar aluno\\;\n2 - Listar alunos\\;\n3 - Buscar aluno\\;\n4 - Alterar aluno\\;\n5 - Remover aluno.")
    let opcao = prompt("Digite a escolha: ");

    oAluno = CriaAluno()
    if (opcao == "1") {
        nome_aluno = prompt("Digite o nome do aluno: ")
        oAluno.AddNome(nome)
        matricula_aluno = prompt("Digite a matrícula do aluno: ")
        oAluno.AddMatricula(matricula_aluno)
        lista_alunos.push(oAluno)
    }
    else if (opcao == "2") {
        for (let posicao in lista_alunos)
            console.log(posicao)
    }
    else if (opcao == "3") {
        let nome_aluno = prompt("Digite o nome do aluno: ")

    }

    else if (opcao == "4") {}

    else if (opcao == "5") {}

};

