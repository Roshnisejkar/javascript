//for loop
//program to add first add n natural number
const prompt= require('prompt-sync')();

let sum=0
let n=prompt('enter the value n')
n=Number.parseInt(n)
for(let i=0; i<n; i++){
    sum+=(i+1)
}
console.log("sum of first"+n+"natural number is"+sum)

//for in loop
let obj={
    ritika:39,
    nikki:79,
    sanshi:59,
    sarthak:30,
    visbas:57
}
for (let a in obj){
    console.log("marks of "+a+"are"+obj[a])
}

//for of loop
for  (let b of "visbas"){
    console.log(b)
}

//while loop
let n=prompt('enter the value n')
n=Number.parseInt(n)

let i=0
while(i<n){
    console.log(i)
    i++;
}


//Do while loop
let n=prompt('enter the value n')
n=Number.parseInt(n)

let i=0
do{
    console.log(i)
    i++;
}while(i<n)




//for loop 

//output squre;
for(let i=0; i<=5; i++){
    console.log(i*i)
}

//incremit
for(let i=0;i<=5;i++){
    console.log(i)
}


//decrement
for(let i=5;i>=0;i--){
    console.log(i)
}


//adding all element in array
const number=[1,2,3,4,5,]
let sum=0
for(let i=0;i<number.length;i++){
    sum+=number[i]
}
console.log(sum)

//Creating a new array based on the existing array

const numbers = [1, 2, 3, 4, 5]
const newArr = []
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)
}
console.log(newArr)


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCasepperCase())
}
console.log(newArr)


//WHILE LOOP
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

//DO WHILE
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)


