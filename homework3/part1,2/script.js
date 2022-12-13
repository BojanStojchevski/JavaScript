
// Homework 1 part 1

function parametar(a){
    return console.log(typeof a);
    
}
   parametar(null)
   parametar("Hello")
   parametar(5)
   parametar(true)
   parametar()

console.log("")
   
// Homework 2 part 2
   let a = 7; //Dog's Age
   
   
   function DogAge(year){
      let result1 = a * year;
      return result1
  }
    
  function HumanAge(year){
      let result2 = year / a;
      return result2
  }
   
  let result1 = DogAge(10)
   console.log(" You have " + result1 + " years")
  let result2 = HumanAge(100)
   console.log( " You have " + result2 + " years")









