// all the buttons for the page
// people btn, starhips btn, next btn, prev btn
// currentPage = 1 // always starts with one

let currentPage = 1;
document.getElementById("peoples").addEventListener("click", function () {
  currentPage = 1;
  getPeople(currentPage);
  document.getElementById("table2").style.display = "none";
  document.getElementById("table1").style.display = "block";
});

document.getElementById("ships").addEventListener("click", function () {
  currentPage = 1;
  getShips(currentPage);
  document.getElementById("table2").style.display = "block";
  document.getElementById("table1").style.display = "none";
});

let prevBtnPeople = document.createElement("BUTTON");
prevBtnPeople.innerHTML = "Previous";
document.body.appendChild(prevBtnPeople);
prevBtnPeople.style.display = "none"


prevBtnPeople.addEventListener("click", function () {
  currentPage -= 1;
  getPeople(currentPage);
  getShips(currentPage);
  // prevBtnPeople.style.display = "none"

});

let nextBtnPeople = document.createElement("BUTTON");
nextBtnPeople.innerHTML = "Next ";
document.body.appendChild(nextBtnPeople);
nextBtnPeople.style.display = "none"

nextBtnPeople.addEventListener("click", function () {
  currentPage += 1;
  getPeople(currentPage);
  getShips(currentPage);
});



function getPeople(currentPage) {
  baseUrl = "https://swapi.dev/api/";
  let peopleUrl = `${baseUrl}people/?page=${currentPage}`;

  fetch(peopleUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      if (data.next === null) {
        nextBtnPeople.style.display = "none";
      } else {
        nextBtnPeople.style.display = "block";
      }
	  if (data.next === null) {
        prevBtnPeople.style.display = "none";
      } else {
        prevBtnPeople.style.display = "block";
      }

      let htmlMain = `<table><tr><th id ="adsendingSort">Name</></th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth Year</th></tr>`;
      let html = "";
      for (i = 0; i < data.results.length; i++) {
        let people = data.results[i];
        html += `<tr>
		   <td>${people.name}</td>
		   <td>${people.height}</td>
		   <td>${people.mass}</td>
		   <td>${people.gender}</td>
		   <td>${people.birth_year}</td>
		   </tr>`;
      }
      html += "</table>";

      let htmlFinal = htmlMain + html;
      document.getElementById("table1").innerHTML = htmlFinal;

      document.getElementById("adsendingSort").addEventListener("click", function(){
          // sortPeoplesByName(data)
          sortPeoplesByNameAscending(data)
          
        })
        document.getElementById("descendingSort").addEventListener("click", function(){
          // sortPeoplesByName(data)
          sortPeoplesByNameDescending(data)
    })
    })
    .catch(function (error) {
      console.log(error);
    });

    
}
function sortPeoplesByNameAscending(data){
  // debugger
  let sortingDataByName =  data.results.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;})

    let htmlMain = `<table><tr><th id ="adsendingSort">Name </th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth Year</th></tr>`;
    let html = "";
    for (i = 0; i < sortingDataByName.length; i++) {
      let people = sortingDataByName[i];
      html += `<tr>
     <td>${people.name}</td>
     <td>${people.height}</td>
     <td>${people.mass}</td>
     <td>${people.gender}</td>
     <td>${people.birth_year}</td>
     </tr>`;
    }
    html += "</table>";

    let htmlFinal = htmlMain + html;
    document.getElementById("table1").innerHTML = htmlFinal;
}
function sortPeoplesByNameDescending(data){
  // debugger
  let sortingDataByName =  data.results.sort(function(a, b){
    if(a.name > b.name) { return -1; }
    if(a.name < b.name) { return 1; }
    return 0;})

    let htmlMain = `<table><tr><th id ="adsendingSort">Name </th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth Year</th></tr>`;
    let html = "";
    for (i = 0; i < sortingDataByName.length; i++) {
      let people = sortingDataByName[i];
      html += `<tr>
     <td>${people.name}</td>
     <td>${people.height}</td>
     <td>${people.mass}</td>
     <td>${people.gender}</td>
     <td>${people.birth_year}</td>
     </tr>`;
    }
    html += "</table>";

    let htmlFinal = htmlMain + html;
    document.getElementById("table1").innerHTML = htmlFinal;
}


function getShips(currentPage) {
  baseUrl = "https://swapi.dev/api/";
  let starShipsUrl = `${baseUrl}starships/?page=${currentPage}`;

  fetch(starShipsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let htmlMain = `<table>
		<tr>
		<th>Name</th>
		<th>Model</th>
		<th>Manufacturer</th>
		<th>Cost</th>
		<th>People Capacity</th>
		<th>Class</th>
		</tr>`;

      let html = "";
      for (i = 0; i < data.results.length; i++) {
        let ships = data.results[i];
        html += `<tr>
	   <td>${ships.name}</td>
	   <td>${ships.model}</td>
	   <td>${ships.manufacturer}</td>
	   <td>${ships.cost_in_credits}</td>
	   <td>${ships.cargo_capacity}</td>
	   <td>${ships.starship_class}</td>
	   </tr>`;
      }
      html += "</table>";
      let htmlFinal = htmlMain + html;
      document.getElementById("table2").innerHTML = htmlFinal;
    })

    .catch(function (error) {
      console.log(error);
    });
}

table1.addEventListener("click", function () {});