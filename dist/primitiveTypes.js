"use strict";
//Number Types, arguments and functions
var num1;
var num2;
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 200; }
    return num1 + num2;
}
//console.log(sum(100,100));
//String Type, String Literals
var firstName;
var lastName;
function fullName(firstName, lastName) {
    return (firstName + " " + lastName).toUpperCase();
}
//console.log(`The full name is ${fullName('suryateja','kandukuru')}`)
//Boolean Type
var cond = true;
if (cond) {
    //console.log("i am true")
}
