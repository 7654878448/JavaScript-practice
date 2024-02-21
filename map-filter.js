/*const mynumber=[1,2,3,4,5,6,7,8,9]
mynumber.forEach(function(number)
{

})
*/
//for each is not a loop it is an method that is for arayy iteration only;
 const arr=[
    {
        firstname:"sumit sehgal",age :22
    },
    {
        firstname:"Chutiya",age :23,
    },
    {
        firstname:"ha bhut bada",age :23,
    },
    {
        firstname:"fattu",age :23,
    },
    

 ]
 arr.forEach(function(user1)
 {
    console.log(user1.firstname,user1.age);
 })
 for(user2 of arr)
 {
    console.log(user2.firstname,user2.age);
 }
 arr.forEach((user)=>// here we are using arrow function 
 {
    console.log(user.firstname,user.age);

 })
