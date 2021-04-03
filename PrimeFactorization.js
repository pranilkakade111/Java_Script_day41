const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE NUMBER : ');
num = Number(num);

let primeArray =[];

var i;
let count =1;
console.log("the prime factors of number are : ");
var i;
for( i=2 ; i<num/2; i++)
{
    while(num%i==0)
    {
        console.log(i+ " ");
        primeArray.push(i);
        num=num/i;
        
    }
}

if(num > 2)
{
    primeArray.push(num);
    
    console.log(num);
   
}

console.log(primeArray);