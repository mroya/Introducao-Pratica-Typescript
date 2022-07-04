let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as  HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoFinal = 0;

limparSaldo();

function somarNoSaldo(soma: number) {
    if(campoSaldo){
        saldoFinal += soma;
        campoSaldo.innerHTML = saldoFinal.toString();
        limparSomatorio();
    }
}

function limparSomatorio() {
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo){
        saldoFinal = 0;
        campoSaldo.innerHTML = saldoFinal.toString();
    }
}

if(botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarNoSaldo(Number(soma.value));
    });
}
    
if(botaoLimpar){
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}


/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */