# Link para acesso: https://gustasilva5.github.io/jogoAdivinha-o/

# Jogo da Adivinhação

Este é um simples jogo da adivinhação onde o usuário deve adivinhar um número entre 0 e 10.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Contém a estrutura HTML do jogo.
- `index.js`: Contém a lógica do jogo em JavaScript.
- `style.css`: Contém os estilos CSS para o jogo.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite um número entre 0 e 10 no campo de entrada.
3. Clique no botão "Tentar".
4. O jogo irá informar se você acertou o número e em quantas tentativas.
5. Para jogar novamente, clique no botão "Jogar Novamente".

## Estrutura do Código

### HTML (`index.html`)

O arquivo HTML define a estrutura básica do jogo, incluindo dois estados de tela: uma para tentar adivinhar o número e outra para mostrar o resultado.

### JavaScript (`index.js`)

O arquivo JavaScript contém a lógica do jogo, incluindo:

- Seleção de elementos DOM.
- Geração de um número aleatório.
- Função de callback para o evento de clique no botão "Tentar".
- Função para resetar o jogo.

### CSS (`style.css`)

O arquivo CSS define os estilos para os elementos do jogo, incluindo:

- Estilos básicos para o corpo e fontes.
- Estilos para os botões e campos de entrada.
- Estilos para as duas telas do jogo.

## Exemplo de Código

### JavaScript

```javascript
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randonNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randonNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas`;
    }

    inputNumber.value = "";
    xAttempts++;
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    xAttempts = 1;
});
