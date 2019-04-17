"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    //html += '<td>' + coffee.id + '</td>';
    html += '<h3 class="coffeeName">' + coffee.name + '</h3>';
    html += '<p class="coffeeType">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedCoffee = coffeeName.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.name === selectedCoffee){
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast){
            filteredCoffees.push(coffee);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.getElementById("coffeeNameOne");
var coffeeNameInput = document.getElementById('coffeeNameInput');
var roastInput = document.getElementById("roastInput");
var addCoffee = document.getElementById("addCoffee");


submitButton.addEventListener('click', updateCoffees);

addCoffee.addEventListener('click', function(event){
    var newCoffee = {id: 15, name:coffeeNameInput.value, roast: roastInput.value};
    coffees.push(newCoffee);
}, false);

