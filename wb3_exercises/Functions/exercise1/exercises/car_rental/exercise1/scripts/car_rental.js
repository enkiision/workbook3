"use strict"
//pickupDateInput
let pickupInput = document.getElementById("pickupInput")
console.log(pickupInput);
let date = Date(pickupInput);
console.log(date);// this works but doesn't show because of placeholder very cool. 

//to get the number of days out of html form need to do below
let numberOfDaysInput = document.getElementById("numberOfDaysInput")
console.log(numberOfDaysInput);
let days = Number(numberOfDaysInput.value) //the value is what is getting typed into the number of days box.
console.log(days);

//Options down below Checkboxes are different than input boxes! use Boolean checked property
//Electronic Tolls ie. eToll - $4
let optionsCost = 0;
let eTollCheckbox = document.getElementById("eTollCheckbox"); 
if (eTollCheckbox.checked){
    optionsCost = optionsCost + (days * 4) //this is to create a set of rolling costs
}
console.log(eTollCheckbox);
//const checkbox = Option(eTollCheckbox); not necessary because I already converted with .checked above. look at .value from line 14
//the FOR and the ID are matching in camelCasing INPUT is there because this is an INPUT BOX
//IT WORKS

//gps ie. gps $3
let gpsCheckbox = document.getElementById("gpsCheckbox");
if (gpsCheckbox.checked){
    optionsCost = optionsCost +(days * 3)
}
console.log(gpsCheckbox);
//IT WORKS

//roadside assistance ie. rAssistCheckbox 
let roadAssistCheckbox = document.getElementById("roadAssistCheckbox");
if (roadAssistCheckbox.checked){
    optionsCost = optionsCost + (days * 3)
}
console.log(roadAssistCheckbox);
//IT WORKS




function estimateTotalCost() {
    //total cost button is a noun/thing , we want and action after the word function; Verb following the noun
}



//radio buttons yes or no
let nder25Yes = document.getElementById("Under25Yes")
let Under25No = document.getElementById("25No")

//Formulas for care rental, options and under 25 surcharge
//car rental $20/per day
//Options: Tolls $4/day, GPS $4/day, Roadside Assistance $3/day
//should put number of days before car rental amount. Number of days factors into the car rental amount
//Rates ^^^


//ask about why my .document isn't being defined