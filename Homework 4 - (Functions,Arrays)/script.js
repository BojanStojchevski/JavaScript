// HOMEWORK1
//     Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
//  The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert //*

// =>

// let arguments = ["Bojan","perfect","learning"];

// function tellStory(arguments){
//     console.log(`This is ${arguments[0]}.${arguments[0]} is a nice person. Today he is ${arguments[1]}.He is ${arguments[2]} all day.The end.`)
//     return
// }
// tellStory(arguments)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HOMEWORK2

// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

// =>

// let numbers = [];

//     function sumOfNumbers(numbers){
//         let sum = 0;
//         for( let i = 0; i < numbers.length; i +=1){
//              sum += numbers[i];
//         } 
//         console.log(sum);
//              return sum
// }    

// sumOfNumbers([1,5,6,8,5])

////////////////////////////////////////////////////////////
// HOMEWORK3

// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

// =>

// let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"]

// function bigString(stringArray){
//     console.log(`${stringArray[0]} ${stringArray[1]} ${stringArray[2]} ${stringArray[3]} ${stringArray[4]} ${stringArray[5]}`);
//     return
// }

// bigString(stringArray)

////////////////////////////////////////////////////////////

// HOMEWORK4
// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.

// =>

// for(let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         i += "\n"
//         console.log(i + "\n"  );
//  }
//     else {i % 2 !== 0 
//           console.log(i + " "  );   
//  }
// }
  


////////////////////////////////////////////////////////////
// HOMEWORK 5

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it
   
// =>

// function minMaxNumber(numbers){
    
//     let minValue = Infinity;
//     let maxValue = -Infinity;
    
//     if(typeof(numbers) === Number){
//         return
//     }
//     for (item of numbers) {
    
//         if (item < minValue)
//         minValue = item;
                    
//         if (item > maxValue)
//         maxValue = item;
//     }
//     console.log('Min number: ' +  minValue);
//     console.log('Max number: ' +  maxValue);

//     let result = minValue + maxValue;
//     console.log('Sum is: ' + result)

//     return result;
    
// }

// let sum = minMaxNumber([5, 6, "name", NaN, 8, 4, undefined, 9, 15,])

///////////////////////////////////////////////////////////////////////////////////////////////
// HOMEWORK 6 

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

// =>

function fullNames(firstNames, lastNames ){
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
       
       let result2 = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        console.log(result2)
    }
}
   fullNames(['Bojan', 'Goran', 'Kristijan'],['Stojchevski', 'Pandev', 'Ronalno'])
