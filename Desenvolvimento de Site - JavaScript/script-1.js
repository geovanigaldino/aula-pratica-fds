/*Crie um botão que muda de cor com o seguinte padrão:
Seu fundo deve ser azul quando o mouse estiver afastado, verde qaundo estiver sobre o botão e vermelho, exibindo a mensagem "quebrei", quando clicado. Depois de quebrado, ele não deve mais modificar.*/

let botao = document.getElementById('botao');
let quebrado = false;
let contaCliques = 0;

botao.addEventListener('mouseover', e => {
    if (!quebrado) {
        botao.style.backgroundColor = 'green';
        botao.style.color = 'white'
    }
});

botao.addEventListener('mouseout', e => {
    if (!quebrado) {
        botao.style.backgroundColor = 'blue';
    }
});

botao.addEventListener('click', e => {
    contaCliques++;
    if(contaCliques >= 10) {
        botao.style.backgroundColor = 'red';
        botao.innerHTML = 'Quebrei';
        quebrado = true;
    }
});