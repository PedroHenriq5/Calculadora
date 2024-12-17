const tela = document.getElementById('visor'); 
let operacao = "";

 function  AddOperacao(event) {
    const value = event.target.textContent;

    if (isOperador(value) && isOperador(operacao.slice(-1))) {
        return;
    }
    operacao += value;
    tela.textContent = operacao;
};

function clean() {
    operacao = "";
    tela.textContent = "0";
};

function equal() {
    try {
        const result = new Function('return ' + operacao)();
        operacao = result.toString();
        tela.textContent = operacao;
    } catch (e) {
        operacao = "";
        tela.textContent = "Erro";
    }
};

function isOperador(char) {
    return ['+', '-', '*', '/'].includes(char);
}
