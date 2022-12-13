
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



 // prasanje?  

// dali moze vaka i dali e pravilno po return da ima console.log()  (16 linija)
   
// ili primer na :
        
//    else{

//     return result 
//     pa posle :  
//                 
                // let result = ATM()
//                 console.log()           kosnolata da e tuka ?


