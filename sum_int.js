const prompt = require('prompt-sync')({sigint: true}); 

let isExit = true;
let primeArray =[];
let length =0;

while(length<5)
{
    let num1  = prompt('ENTER THE NUMBER : ');
    num1 = Number(num1); 
    primeArray.push(num1);
    length++
    
}

console.log(primeArray);
let add=0;
var i;
var j;
var k;
for(i =0 ; i<primeArray.length-2 ;i++)
{
    for(j=i+1; j<primeArray.length-1 ; j++)
    {
        for(k=j+1 ; k<primeArray.length ; k++)
        {
           if(primeArray[i]+primeArray[j]+primeArray[k]==0)
           {
                 console.log(primeArray[i]+ " + " +primeArray[j]+ " + " +primeArray[k]+ " =  0" );

                 isExit=false;
           }

        }
    }  
}
if(isExit==false)
{
    console.log("given perfect three pair input");
}
else
{
    console.log("not given a perfect three pair of input ");
    
}