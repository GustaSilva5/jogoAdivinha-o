//Variaveis
const screen1 =  document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randonNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;


// Eventos 
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick)


//função callback
function handleTryClick(event){
    event.preventDefault(); //Não faça o padrao desse evento 

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randonNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Voce acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
