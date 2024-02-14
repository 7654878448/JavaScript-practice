function add(num1,num2)
{
    let result=num1+num2;
   // return result;
   // if we comment the return Statement the we will not get the values because it will not retrun the value 
   // if we want to store the value of a function into variable then we must have to return the value return statement is compulsory;



}
const accept=add(22,45);
// if we not the return the value then we will not able to store that value in to a variable
console.log(accept);
function loginUserMessage(username)
{
    return `${username} just logged in`
}
console.log(loginUserMessage("sumit Sehgal"));