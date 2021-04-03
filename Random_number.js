var randomAr=[];
let length = randomAr.length;
console.log(length);


while(length<=9)
{
    let random = Math.floor(Math.random()*(999-100+1)+100);
    console.log(random);
    randomAr.push(random);
    length++;
    
}

console.log(randomAr);
function getSecmax(randomAr)
{
  var temp;
   var i;
   var j;
   for(i=0 ; i<randomAr.length;i++ )
   {
       for(j<i+1 ; j<randomAr.length;j++)
       if(randomAr[i]>randomAr[j])
       {
        temp=randomAr[i];
        randomAr[i]=randomAr[j];
        randomAr[j]=temp;    
       }
   }
   console.log("the 2nd max value = " +randomAr[randomAr.length-2]+ " and minimum value = "+randomAr[randomAr.length+2]);
}

function getSecmin(randomAr)
{
    let min = randomAr[0];
    var i;
    for(i=0 ; i<randomAr.length;i++ )
    {
        if(randomAr[i]<min)
        {
            max=randomAr[i];
        }
    }
    return min; 
}
let maxelement = getSecmax(randomAr);
let minelement = getSecmin(randomAr);

console.log(getSecmax);
console.log(minelement);