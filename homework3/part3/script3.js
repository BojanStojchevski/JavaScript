
let money = prompt("How much money you will wihdraw?");
let parsedMoney = parseInt(money);

let bankCash = 1000;

function ATM() {
    
     if(!Number.isNaN(parsedMoney)){
            
        if( parsedMoney > bankCash) {
             return console.log("Not enough money"); 
            
        } else {
             let result = bankCash - parsedMoney;
             return console.log("You will withdraw: " + parsedMoney + " dollars and on your Bank account will left: " + result + " dollars" );
        }
    } else {
         return  console.log("Not a valid input");
    }
}

 ATM()






