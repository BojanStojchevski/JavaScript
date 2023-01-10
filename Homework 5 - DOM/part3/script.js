// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)


let h1 = document.getElementById("header");
h1.innerText = prompt("What is the name of the recipe?");

let list = prompt("How many ingredients  do we need for the recipe?");
let arr = [];
function ingredients(list) {
 
    if(isNaN(list))
        alert("vnesovte text")

    for (let i = 0; i < list; i++) {
        let n = prompt("Enter a ingredients" + (parseInt(i+1)))
        arr.push(n);
    }

    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += "<li>" + arr[i] + "</li>"
    }

    let lista = document.querySelector(".lista");
    lista.innerHTML = text
}
ingredients(list)

