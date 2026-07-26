//1.
var isEven = 6;
console.log(isEven % 2 === 0? "It's even." : "It's odd.");

//2.
var cart = [
    {
        productName : "Phone" ,
        productPrice : 500
    },
    {
        productName : "Phone Case" ,
        productPrice : 5
    },
    {
        productName : "USB" ,
        productPrice : 30
    }
];
console.log(cart[0].productPrice + cart[1].productPrice + cart[2].productPrice >= 100? "Discount for you <3" : "No discount.");

//3.
var weekDay = 5;
switch(weekDay){
    case 3 :
    case 4 :
        console.log("Soon weekend");
        break;
    case 5 :
    case 6 :
        console.log("Weekend")
        break;
    default : 
        console.log("Looking for weekend")
}