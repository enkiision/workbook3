"use strict";

//#1
function test1(){
    let a = 10;
    if(a > 5){
        a = 7;
    }
    console.log("a = " + a) 
}
test1()

//#2
"use strict";
function test2A() {
 if (1 == 1) {
 var a = 5;
 }
 console.log("a = " + a);
}
test2A()

//#2B
"use strict";
function test2B() {
    if (1 == 1) {
        let c = 5;
    }
    console.log("c = " + c);
}
test2B();

//#3

//#4
"use strict";
let b = 4;
function test4() {
 let b = 7;
 console.log("b = " + b);
}
test4();
console.log("b = " + b);

//#5
let d = 4;
function test5() {
    d = 7;
    function again() {
        let d = 8;
        console.log("d = " + d);
    }
    again();
    console.log("d = " + d);
}

test5();
console.log("d = " + d);

//Strings

let name = "Dana L. Wyatt";
let favoriteQuote = "";