// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)


function generate(rows, columns) {
    
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    
    for (let i = 1; i <= rows ; i++) {
     
      let row = document.createElement("tr");
  
      for (let j = 1; j <= columns; j++) {
     
        let cell = document.createElement("td");
        let cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    tableBody.appendChild(row);
}
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");
}

generate(5,5)