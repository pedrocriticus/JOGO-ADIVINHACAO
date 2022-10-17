const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
console.log(randomNumber);


//função CallBack
function handleTryClick(event) {
    event.preventDefault();// Não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")

    
    if (Number(inputNumber.value) == randomNumber) {
       screen1.classList.add("hide")
       screen2.classList.remove("hide")

        document.
        querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativas!`;
         
}
    inputNumber.value = "";
    xAttempts++;
   
};

//Eventos
const btnTry = document.querySelector("#btnTry");

const btnReset = document.querySelector("#btnReset");

//função callBack
btnTry.addEventListener('click', handleTryClick);

btnReset.addEventListener('click', function() {
    
    screen1.classList.remove("hide");
    screen2.classList.add("hide");

    xAttempts = 1;
    document.location.reload()
})





// let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");

// const randomNumber = Math.round(Math.random() * 10);


// let xAttempts = 1;

// while(Number(result) != randomNumber) {
//     result = prompt("Erro, tente novamente!");
//     xAttempts++;
// }

// if(xAttempts === 1) {
//     alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativa.`)
// } else {
//     alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas.`)
// }
