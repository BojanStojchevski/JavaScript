let userInput = prompt("Type your birth year");
let parsedInput = parseInt(userInput);

let chineseZodiac = (parsedInput - 4) % 12;
console.log(chineseZodiac)
console.log(typeof(chineseZodiac))

if(!Number.isNaN(chineseZodiac)){
    if( chineseZodiac === 0){
        console.log("Your sing is Rat");
   } else if( chineseZodiac === 1){
        console.log("Your sign is Ox")
   } else if( chineseZodiac === 2){
        console.log("Your sign is Tiger");   
   } else if( chineseZodiac === 3){
        console.log("Your sign is Rabbit");   
   } else if( chineseZodiac === 4){
        console.log("Your sign is Dragon");    
   } else if( chineseZodiac === 5){
        console.log("Your sign is Snake");    
   } else if( chineseZodiac === 6){
        console.log("Your sign is Horse");    
   } else if( chineseZodiac === 7){
        console.log("Your sign is Goat");    
   } else if( chineseZodiac === 8){
        console.log("Your sign is Monkey");    
   } else if( chineseZodiac === 9){
        console.log("Your sign is Rooster");    
   } else if( chineseZodiac === 10){
        console.log("Your sign is Dog");    
   } else if( chineseZodiac === 11){
        console.log("Your sign is Pig");    
   }

} else{
    console.log("Not a valid input");
}
        
   
   
