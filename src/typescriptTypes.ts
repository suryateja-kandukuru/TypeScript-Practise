// Any type

let studentno: any
studentno = 12
studentno = "16g21a0557"
studentno = true

//For any type any we can assign any type of data

//Implicit vs Explicit Types

let username = "suryateja-kandukuru"
//if we dont mention the type it will take the type
//implicitly based on the value assigned to the variable

let fullname: string = "suryateja kandukuru"
// if we mention the type it is is explicit type

let named; // type any
named = "teja"; //type any

//void type
// if we dont mention a return type it will take as void
function increment(i: number) {
   while (i < 10) {
      i = i + 1;
      //console.log(i);

   }
}
increment(0)
//console.log("hi")

// Never Type
// for supose we have a function which doesnt returns anything 
// and will never occurs or returns 

function cal() {
   let i = 0;
   while (true) {
      console.log(i);
      i = i + i;
      ErrorHandler("infinete loop")
   }
}
function ErrorHandler(msg: string): never {
   throw new Error(msg);
}
//cal();


let pizza: string = "small";

function selectSize(pizza: "small" | "large" | "medium"): void {
   pizza = "large";
}
//console.log(pizza)

//Function Types

//Normal Function

function calculate(price: number, quantity: number): number {
   return price * quantity;
}
let total = calculate(100, 100);
//console.log(total);

//Arrow style

let ToTal = (price: number, quantity: number): number => price * quantity;

//console.log(ToTal(100, 100));

//Optional arguments

let cost = (a: number, b?: number): number => {
   if (b) {
      return a * b;
   }
   return a;
}
//console.log(cost(10))

// Object Types

let colors: { name: string, size: number }

colors = {
   name: "red",
   size: 30
}
//console.log(colors.name);

// Array Types
let pencilColors: [string, number]
pencilColors = ["red", 30];
//console.log(pencilColors[0]);
















