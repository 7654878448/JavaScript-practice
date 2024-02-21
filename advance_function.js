//FUNCTION STATEMENT>>>>>>
/*function a()
{
    console.log("this is nothing just a function Statement");

}
// Function Expression
var b=function()
{
    console.log("this is something called function EXpression");

}
//annonymus function in javaScript is life function without its name callede comnly as annonymus function
// we can use anonymus function in javaScript by storinng the value in variable
let text = function ()// here we are simply declared a funtion with no name and this is called as annonymus function
{
    console.log("hell0");
}
*/
/* function declartion
function square(num)
{
    return  num*num;
}
*/
// function Expression>>>>>
/*
const Square=function(num){
    return num*num;

}*/
// Arrow function>>>>
  const text=(...num1)=> {
    let result=0;
    for( const i of num1)
    {
        result=result+i;


    }
    return result;
 }
 console.log(text(22,65,67,89,3,22));
 
 