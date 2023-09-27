let randomStorage = Math.ceil(Math.random() * 100);
let checkValue = document.getElementById("inputValue");
let result = document.getElementById("blank_para");

function check(){
    let guessedNum = parseInt(checkValue.value);
    if(randomStorage > guessedNum){
        result.textContent="Its too high try something lower";
        result.style.backgroundColor = "blue";
    } else if(randomStorage < guessedNum){
        result.textContent = "Its too low try something higher";
        result.style.backgroundColor = "red";
    } else if (randomStorage === guessedNum){
        result. textContent = "Bingo!! you got it.";
        result.style.backgroundColor = "green";
    } else{
        result.textContent = "Enter a valid input";
        result.style.backgroundColor = "darkblue";

    }
}

console.log(randomStorage);