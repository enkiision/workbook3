"use strict"

function displayMailingLabel(name, address, city, state,zip){
    console.log(name, address, city, state,zip);// the paramaters are where name is
}

displayMailingLabel("Enki", "Mybusiness Drive", "Brooklyn", "NY", "12345");
//complete, working

function addNumbers(num1, num2) {
    console.log(num1, + num2); 
}
addNumbers("1", + "2");

//

function addNumbers(num1, num2) {
    console.log(num1, + num2); 
}
addNumbers(" 1 + 2 = 3 ");

////not complete not working


function displayReceipt(totalDue, amountPaid) {
console.log("Total Due: " + totalDue);
console.log("Amount Paid: " + amountPaid);
//console.log("Total Due: " + changeDue);

let changeDue = amountPaid - totalDue;

}
displayReceipt(90,40)

////not complete not working

function displayReceipt(totalDue, amountPaid) {
    console.log("Total Due: " + totalDue);
    console.log("Amount Paid: " + amountPaid);
    let changeDue = amountPaid - totalDue;

    if (changeDue < totalDue) {
        let amountDue = Math.abs(changeDue);
        console.log("You are short, please pay " + amountPaid + " more.");
    } else {
        console.log("Change Due: " + changeDue.toFixed(2));
    }
}

displayReceipt(20,30)
console.log("-----------------");
displayReceipt(100,30)

//not complete not working