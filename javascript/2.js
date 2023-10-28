//find  the largest num if 5 number
/*let a=-5;
b=-2;
c=6;
d= 0;
f=-1;
if (a>b & a>c & a>d & a>f)
{
    console.log(a)
}
else if (b>a & b>c & b>d & b>f)
{
    console.log(b);
}
else if (c>a & c>b & c>d & c>f)
{
    console.log(c);
}
else if (d>a & d>c & d>b & d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}*/


//JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers
/*for (let x=0; x<=15; x++) {
    if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}*/



//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
/*const student=[['david',80],['vinod',77],['divya',88],['ishita',95],['thomas',68]];
let sum=0
for(let i=0;i<student.length;i++){
    sum+=student[i][1];
    var avg=(sum/student.length);
}
console.log('averge marks'+(sum)/student.length);
if(avg<60){
    console.log('f')
}
else if(avg<70){
    console.log('d')
}
else if(avg<80){
    console.log('c')
}
else if(avg<90){
    console.log('b')
}
else if(avg<100){
    console.log('a')
}*/



//Write a JavaScript program that iterates integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
// For numbers multiples of both three and five print "FizzBuzz".

/*for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 & i%5 === 0 )
  {
    console.log(i+ " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log( i+"Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log( i+" Buzz" );
  }
  else
  {
    console.log(i);
  }
}*/




//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
/*function gcd(a, b) {
    // Ensure both a and b are positive integers
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        // Calculate the remainder of the division of a by b
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// Example usage:
const num1 = 336;
const num2 = 360;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${result}`);*/


//Write a JavaScript program to sum 3 and 5 multiples under 1000.
/*var sum = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);*/

// Declare variable outside the loop
//let i = 0;

// Omit all statements
/*for (; ;) {
	if (i > 3) {
		break;
	}
	console.log(i);
	i++;
}*/



// Initialize empty array
/*
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
    console.log(arrayExample);	
}
*/





//Using a for loop output the elements in reverse order
/*const array=[1,2,3,4]
const reversearray=[]
for(let i=array.length-1;i>=0;i--){
    const valueindex=array[i]
    reversearray.push(valueindex)
}
console.log(reversearray)*/




//Given two arrays of integers. Add up each element in the same position and
//create a new array containing the sum of each pair. Assume both arrays are of the same length.
/*const array3 = [11, 12, 13, 14, 15,];
const array4 = [16, 17, 18, 19, 20,];
let results = [];

for (let i=0; i < array3.length; i++) {
  results.push(array3[i] + array4[i])
}
console.log(results)*/




//how to get maximum or minimum no of while loop
const numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let max = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // 74







          
           