"use strict"

//exercise 1. exercise 2 was optional challenge try to do this too.
let fullName = "Jane Doe"

let space = fullName.indexOf(" ") //we use space secondly-find out why, fullName calls what we want to usse and .indexOf directly goes in and follows that specfic command.
// create (), next we have to add a space in the quotations. This is where we find out the index spacing, 
//console.log(space);
let firstName = fullName.substring(0, space)// this is calling to the indexOf to utilize and place the first name. The output of this is "First name: Jane" spaces included
let lastName = fullName.substring(space+1,) // include the space and that + because this is how this program works for index spacing, it will read the string until the end.

console.log("Name: " + fullName);//this outputs to 4 and Name: Jane Doe which is correct. 
console.log("First name: ", firstName);//Following you can leave line 5 in quotes empty so it says Jane insetead of 4
console.log("Last name ", lastName);
//jane=0-3, Doe=5-7
//this is what we thought was supposed to be on line 11 - let firstName = fullName.substring(0, space)
// these output to; (include spaces) "Name: Jane Doe *indent* First name:  Jane *indent *Last name  Doe"

//pt 2 copy and paste the first part into 1.2. making this into a function
"use strict"

function parseAndDisplayName(fullName){
    //let fullName = "Jane Doe"
    let space = fullName.indexOf(" ");
    let firstName = fullName.substring(0, space);
    let lastName = fullName.substring(space);
        let result = `Name: ${fullName}  comment//utilize this backcomma thing`` it ends after $last name
    First name: ${firstName}
    Last name: ${lastName}`

        console.log(result);
        
//console.log("Name: " + fullName);
//console.log("First name: ", firstName);
//console.log("Last name ", lastName);
        
}

parseAndDisplayName("Jane Doe")

//Exercise 3 look in Craig's gitHub https://github.com/craigmckeachie/fall2024-workbook3/blob/main/exercises/part-codes.js

const code1 = "ACME:123-L"; // const because these numbers arent changing
const code2 = "DI:12345-M";
const code3 = "1-12"; // this completes setup
const colon = ":";
const hyphen = "-";

function getSupplier(code) { //called this code generically intentionally
    
}

function getSize(code) {
    
}

function getProductNumber(code) {
    
}