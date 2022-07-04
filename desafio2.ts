enum profissaoAtual {
    Atriz,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: profissaoAtual
}

const maria: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: profissaoAtual.Atriz
}

const roberto: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissaoAtual.Padeiro
}

const laura: pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: profissaoAtual.Atriz

}
const carlos: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissaoAtual.Padeiro
}