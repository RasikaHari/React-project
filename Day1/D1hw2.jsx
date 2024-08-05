import React from 'react';
function Class2()
{
    let age=18;
    let name="Rasika";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
    alert("Check Check the console output");
}
function Hw2(){
    return(
        <div>
            <button onClick={Class2}>hw2</button>
        </div>
    )
}
export default Hw2;