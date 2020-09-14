// Arrow Function and implicit returns (1 to 34)

var pizzas=[
    {
        name:'pepparoni',types:['cheese','non-cheesed']
    },
    {
        name:'onion'
    },
    {
        name:'corn'
    }
]

var mappedPizzas=pizzas.map((pizza)=>{
  return pizza.name.toUpperCase();
})

//console.log(mappedPizzas)

var Books={
    name:"Why u dont know js",
    getBookName:()=>Books.name
}
//console.log(Books.getBookName())

var count = (i=0)=>{
    while(i<10)
    {
        console.log(i);
        i=i+1;
    }
}
//count();

//Default Function Parameters (36 to 41)

var multiply = (a:number,b:number = 100) => { return a*b }
//console.log(multiply(10,20));
//console.log(multiply(10))

// Object Literal Improvements (42 to )

var books=[
    {
        name:"Angular",price:250
    },
    {
        name:"React",price:300
    },
    {
        name:"Vue",price:500
    }
]

var freeOffer =['javascript']

//we can club different objects to into a single object 

var orders = {books,freeOffer}
//console.log(orders);
 
function OrderBooks(books:any,freeOffer:any)
{
    return {books,freeOffer}
}

//console.log(OrderBooks(books,freeOffer));

var colorPens={
    //color:"red",getColor:function(){return this.color}
    // OR
    color:'red',getColor:() => {
        return colorPens.color
    }
}
//console.log(colorPens.getColor())


//Spread Operator ( 82 to 92)

var newBooks=['angular','react','vue']
var oldBooks=['html','css','js']
var totalBooks=[...newBooks,...oldBooks,'all pdfs']

//console.log(totalBooks);

newBooks[0]="deno";
totalBooks=[...newBooks,...oldBooks,'all pdfs']

//console.log(totalBooks)


// Rest Parameter

function sumOfNumbers(msg:string,...arr: number[])
{
    //console.log(msg)
return arr.reduce((a:number,b:number) =>  a+b )
}
//console.log(sumOfNumbers("hiii",1,2,3,4,5))

//Destructuring Arrays and Objects

var Logs=['Log1','Log2','Log3']

var [first,second,third]=Logs
//console.log(first,second,third); //Log1,2,3

const obj={
    name:'surya',age:20
};

function objs({name,age}:{name:string,age:number})
{
//console.log(name,age)
}
objs(obj)