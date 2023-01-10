// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


let Books = [{
    title:"The Robots of dawn",
    author:"Isaac Asimov",
    readingStatus: true,
},
    { 
    title:"Mockingjay: The Final Book of The Hunger Games",
    author:"Suzanne Collins",
    readingStatus: false,
}];

for(let i = 0; i < Books.length; i++){
    
    let book = "'" + Books[i].title + "'" + ' by ' + Books[i].author + ".";
    
    if ( Books[i].readingStatus){
            console.log("Already read " + book)
    }else{
        console.log("You still need to read" + book)
    }
}