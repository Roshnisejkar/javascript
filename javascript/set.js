//use logical opreator to find wheather age of the person between 10&20

const prompt= require('prompt-sync')();
let a=prompt('whats your age??')
if(a<=20 &a>=10){
    console.log("your age between 10 and 20")
}
else{
    console.log("your age  not between 10 and 20")
}

//demostrate to use swtich case statement in javasript 
let a1=prompt('whats your age')
switch (a1){
    case '12':
        console.log('your age is 12')
        break
    case '13':
        console.log('your age is 13')
        break
    case '14':
        console.log('your age is 14')
        break
    case '15':
        console.log('your age is 15')
        break
    default:
        console.log('your age is not special')
        break
}


// write a javacript program a number is divisble 2 and 3

let num=prompt('whats is your age')
num=Number.parseInt(num)
if(num%2==0 & num%3==0){
    console.log('num is divisible' )
}
else{
    console.log('num is not divisble')
}


//print you can drive or not based on age is greater than 18 using ternary opreator
let age=15
let a2= age>18? "you can drive":'you can not drive'
console.log(a)