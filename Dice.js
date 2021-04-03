let Dicechecking = new Map();
let isStopped = false;
Dicechecking.set(1 , 0);
Dicechecking.set(2 , 0);
Dicechecking.set(3 , 0);
Dicechecking.set(4 , 0);
Dicechecking.set(5 , 0);
Dicechecking.set(6 , 0);

const getrandom = (max) => 
{
    return (Math.floor(Math.random()*10))+1 % max;

}
const checkValuetoMax= (key,value) => 
{
    if(value == 10)
    {
        isStopped=true;
        console.log("the Dice  of number " +key+ " has reached to max of " +value+ " hence we stopped")
    }
}

const setValueToMap = (key) => 
{
   let value = Dicechecking.get(key);
   checkValuetoMax(key ,value);
   value=value+1;
   Dicechecking.set(key,value);
}

while(!isStopped)
{
    let random = getrandom(6);
    setValueToMap(random);
}


console.log(Dicechecking);