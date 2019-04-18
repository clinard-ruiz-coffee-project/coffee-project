"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<h3 class="coffeeName">' + coffee.name + '</h3>';
    html += '<p class="coffeeType">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length-1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// function autoComplete() {
//
// }


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectName = nameCoffee.value.toString().toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee){
        if ((coffee.roast === selectedRoast) || (coffee.name.toLowerCase() === selectName)) {
            filteredCoffees.push(coffee);
        }else if ((coffee.name.toLowerCase() === selectName) || (selectedRoast === 'all')){
            filteredCoffees.push(coffee);

            // CANT GET THE BOTTOM INPUT TO SINGLE OUT WITHOUT CANCLEING OTHERS

        // }else if (selectedRoast !== 'all') {
        //     filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//---------------------------

//THIS WAS THE BOOTSTRAP ATTEMPT
//  |
//  |
//  V
// $('#form-autocomplete').mdb_autocomplete({
//     data: coffees.name
// });
//
// var n= coffees.length; //length of datalist tags
//
// function ac(value) {
//     document.getElementById('#coffeeNameOne').innerHTML = '';
//     //setting datalist empty at the start of function
//     //if we skip this step, same name will be repeated
//
//     len = value.length;
//     //input query length
//     for (var i = 0; i<n; i++) {
//         if(((coffees[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
//         {
//             //comparing if input string is existing in tags[i] string
//
//             var node = document.createElement("option");
//             var val = document.createTextNode(coffees[i]);
//             node.appendChild(val);
//
//             document.getElementById("datalist").appendChild(node);
//             //creating and appending new elements in data list
//         }
//     }
// }


//--------------------------------

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameCoffee = document.querySelector('#coffeeNameOne');
var newCoffee = document.querySelector('#coffeeNameTwo');
var newRoast = document.querySelector('#roast-selectionAdd');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

function addCoffees (input) {
    var addID = coffees.length+1;
    var addName = newCoffee.value.toString();
    var addRoast = newRoast.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}
// tbody.innerHTML = renderCoffees(addCoffees());