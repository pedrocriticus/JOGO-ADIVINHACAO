// variáveis botões html
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

// variáveis Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

//Variável Calculo randõmico
const randomNumber = Math.round(Math.random() * 10);

//Variável de incrementação de tentativas
let xAttempts = 1;
console.log(`O número é ${randomNumber}.`);

//Variável de input
const inputNumber = document.querySelector("#inputNumber");



//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

//funções CallBack
function handleTryClick(event) {
    event.preventDefault();// Não faça o padrão
    if (Number(inputNumber.value) == randomNumber) {
       toggleScreen();
       screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`; 
}   controllerInputNumber();
    inputNumberValue();
    inputNumber.value = "";
    xAttempts++;
    
};

function handleResetClick() {
    toggleScreen();
        document.location.reload()
};

function toggleScreen() {
    screen1.classList.toggle("hide") ;
    screen2.classList.toggle("hide");
}

function inputNumberValue(number = '') {
    if (inputNumber.value === number) {
        xAttempts--
        alert('Digite um número')
    }
}

// function controllerInputNumber(number1) {
//     let number0 = 0 ;
//     let number10 = 10;
//     number1 = 

//     if (Number(inputNumber.value) != number1)  {
//         xAttempts--
//         alert('Digite um número entre 0 e 10')
//    }
    
// }
/*
Desafio qual é o evento de ENTER?

-fazer um limite entre 0 e 10

-precisa ter número dentro do input para dar enter

*/ 
