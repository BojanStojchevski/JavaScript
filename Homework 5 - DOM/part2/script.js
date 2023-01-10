// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


let arr = [51,23,14,16,8,2,4,6,12,16,22];

let htmlText;
htmlText="<ul>"
for (let i = 0; i < arr.length; i++) {

    htmlText += "<li>"+ arr[i] + "</li>";
}

document.getElementById("list").innerHTML = htmlText;
    
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
}

//////////////////////////////////////////////////////////////////////////////
document.getElementById("sum").innerHTML = "Sum of the array numbers: " + sum;

  let sum2=0;
  let result="";
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
    result+=arr[i] +"+";
}
/////////////////////////////////////////////////////////////////////////////////

let mathEquasion = result.slice(0, -1) +"="+sum2;
document.getElementById("math").innerHTML = mathEquasion;
