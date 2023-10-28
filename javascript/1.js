//for of loop
//We use for of loop for arrays. It is very hand way to iterate through an array

const numbers = [1, 2, 3, 4, 5]
for (let num of numbers) {
    console.log(num)
}
//output erray inside of number


const number=[1,2,3,4,5]
let sum=0
for(const num of number){
    sum+=num
}
console.log(sum)

//const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
for(const teach of webTechs){
    console.log(teach.toUpperCase())
}


//Write a loop that makes the following pattern using console.log():
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
       process.stdout.write("*")
    }
    console.log(" ")
}


for(let i=0;i<=10;i++){
    console.log(`${i}*${i}=${i*i}`)  
}


for(let i=0;i<=10;i++){
    console.log(i,i**2,i**3)  
}

//even number
for(let i=0;i<=10;i+=2){
    console.log(i)
}

//odd number
for(let i=1;i<=10;i+=2){
    console.log(i)
}





