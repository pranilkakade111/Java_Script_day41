let Calender = new Map();

Calender.set(1,0);
Calender.set(2,0);
Calender.set(3,0);
Calender.set(4,0);
Calender.set(5,0);
Calender.set(6,0);
Calender.set(7,0);
Calender.set(8,0);
Calender.set(9,0);
Calender.set(10,0);
Calender.set(11,0);
Calender.set(12,0);

const getrandom = (max) => 
{
    return (Math.floor(Math.random()*10))+1 % max;

}


const setPersonToMap = (key) => 
{
   let value = Calender.get(key);
   value=value+1;
   Calender.set(key,value);
}

function  ShowMonthHavingMaxPeople()
{
    let max = 0;
    for(let k of Calender.keys())
    {
          if(Calender.get(k)>max)
          {
              max=Calender.get(k);
          }
    }

    console.log(max);
}


for(let index =1 ; index<=50 ; index++)
{
    let random = getrandom(12);
    //console.log(random);
    setPersonToMap(random);
    
    if(index==50)
    {
         ShowMonthHavingMaxPeople();
    }
    
}
console.log(Calender);