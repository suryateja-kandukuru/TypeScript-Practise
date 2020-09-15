"use strict";
// Any type
var studentno;
studentno = 12;
studentno = "16g21a0557";
studentno = true;
//For any type any we can assign any type of data
//Implicit vs Explicit Types
var username = "suryateja-kandukuru";
//if we dont mention the type it will take the type
//implicitly based on the value assigned to the variable
var fullname = "suryateja kandukuru";
// if we mention the type it is is explicit type
var named; // type any
named = "teja"; //type any
//void type
// if we dont mention a return type it will take as void
function increment(i) {
    while (i < 10) {
        i = i + 1;
        //console.log(i);
    }
}
increment(0);
//console.log("hi")
// Never Type
// for supose we have a function which doesnt returns anything 
// and will never occurs or returns 
function cal() {
    var i = 0;
    while (true) {
        console.log(i);
        i = i + i;
        ErrorHandler("infinete loop");
    }
}
function ErrorHandler(msg) {
    throw new Error(msg);
}
//cal();
var pizza = "small";
function selectSize(pizza) {
    pizza = "large";
}
//console.log(pizza)
//Function Types
//Normal Function
function calculate(price, quantity) {
    return price * quantity;
}
var total = calculate(100, 100);
//console.log(total);
//Arrow style
var ToTal = function (price, quantity) { return price * quantity; };
//console.log(ToTal(100, 100));
//Optional arguments
var cost = function (a, b) {
    if (b) {
        return a * b;
    }
    return a;
};
//console.log(cost(10))
// Object Types
var colors;
colors = {
    name: "red",
    size: 30
};
//console.log(colors.name);
// Array Types
var pencilColors;
pencilColors = ["red", 30];
//console.log(pencilColors[0]);
