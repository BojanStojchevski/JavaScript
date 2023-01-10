// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let Headers = document.getElementsByTagName("h1");
console.log(Headers)
Headers[0].innerText = "Hello"
Headers[1].innerText = "Is this"

let Paragraphs = document.getElementsByTagName("p");
console.log(Paragraphs)
Paragraphs[0].innerText = " i am Bojan"
Paragraphs[1].innerText = "Stojchevski"

let text = document.querySelector("text");
text.innerText = "Student of SEDC"


let h3 = document.querySelector("h3");
h3.innerText = "How its work"
