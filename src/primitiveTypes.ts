//Number Types, arguments and functions
var num1:number;
var num2:number;

function sum(num1:number,num2:number=200): number
 {
    return  num1+num2;
 }
//console.log(sum(100,100));


//String Type, String Literals

var firstName:string;
var lastName:string;

function fullName(firstName:string,lastName:string):string {
return (firstName+" "+lastName).toUpperCase();
}

//console.log(`The full name is ${fullName('suryateja','kandukuru')}`)

//Boolean Type

var cond:boolean =true

if(cond)
{
    //console.log("i am true")
}