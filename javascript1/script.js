let lista_alunos = [];

function CriaAluno() {
    let aluno = new Aluno
    return aluno
}

class Aluno {
    constructor(nome){
        this.nome = nome
    }
    AddNome(oNome) {
        this.nome = oNome
    }
}

const sistema = () => {
    console.log("O que gostaria de fazer?")
    console.log("1 - Adicionar aluno\\;\n2 - Listar alunos\\;\n3 - Buscar aluno\\;\n4 - Alterar aluno\\;\n5 - Remover aluno.")
    let opcao = prompt("Digite a escolha: ");

    oAluno = CriaAluno()
    if (opcao == "1") {
        
    }

    else if (opcao == "2") {}

    else if (opcao == "3") {}

    else if (opcao == "4") {}

    else if (opcao == "5") {}

};

