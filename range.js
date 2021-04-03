const prompt = require('prompt-sync')({sigint: true}); 
let uperrange  = prompt('ENTER THE UPER RANGE NUMBER : ');
let uperrange = Number(uperrange);
let lowerrange  = prompt('ENTER THE LOWERNUMBER : ');
let lowerrange = Number(lowerrange);

let Multiplearray =[];
var i;
for(i=uperrange ; i<lowerrange ;i++)
{
   Multiplearray.push(i);
}

console.log(Multiplearray);

var j;
for(j =0 ; j<Multiplearray.length ; j++)
{
   if(Multiplearray[j] % 11 == 0)
   {
       console.log(Multiplearray[j]);
   }

}