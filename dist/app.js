"use strict";
// Arrow Function and implicit returns (1 to 34)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var pizzas = [
    {
        name: 'pepparoni', types: ['cheese', 'non-cheesed']
    },
    {
        name: 'onion'
    },
    {
        name: 'corn'
    }
];
var mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});
//console.log(mappedPizzas)
var Books = {
    name: "Why u dont know js",
    getBookName: function () { return Books.name; }
};
//console.log(Books.getBookName())
var count = function (i) {
    if (i === void 0) { i = 0; }
    while (i < 10) {
        console.log(i);
        i = i + 1;
    }
};
//count();
//Default Function Parameters (36 to 41)
var multiply = function (a, b) {
    if (b === void 0) { b = 100; }
    return a * b;
};
//console.log(multiply(10,20));
//console.log(multiply(10))
// Object Literal Improvements (42 to )
var books = [
    {
        name: "Angular", price: 250
    },
    {
        name: "React", price: 300
    },
    {
        name: "Vue", price: 500
    }
];
var freeOffer = ['javascript'];
//we can club different objects to into a single object 
var orders = { books: books, freeOffer: freeOffer };
//console.log(orders);
function OrderBooks(books, freeOffer) {
    return { books: books, freeOffer: freeOffer };
}
//console.log(OrderBooks(books,freeOffer));
var colorPens = {
    //color:"red",getColor:function(){return this.color}
    // OR
    color: 'red',
    getColor: function () {
        return colorPens.color;
    }
};
//console.log(colorPens.getColor())
//Spread Operator ( 82 to 92)
var newBooks = ['angular', 'react', 'vue'];
var oldBooks = ['html', 'css', 'js'];
var totalBooks = __spreadArrays(newBooks, oldBooks, ['all pdfs']);
//console.log(totalBooks);
newBooks[0] = "deno";
totalBooks = __spreadArrays(newBooks, oldBooks, ['all pdfs']);
//console.log(totalBooks)
// Rest Parameter
function sumOfNumbers(msg) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    //console.log(msg)
    return arr.reduce(function (a, b) { return a + b; });
}
//console.log(sumOfNumbers("hiii",1,2,3,4,5))
//Destructuring Arrays and Objects
var Logs = ['Log1', 'Log2', 'Log3'];
var first = Logs[0], second = Logs[1], third = Logs[2];
//console.log(first,second,third); //Log1,2,3
var obj = {
    name: 'surya', age: 20
};
function objs(_a) {
    var name = _a.name, age = _a.age;
    //console.log(name,age)
}
objs(obj);
