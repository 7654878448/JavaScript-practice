function calcualate_cart(...num)
{
    return num
}
console.log(calcualate_cart(200,345,657));
const user={
    username:"sumitSehgal",
    price:1999,

}
function handleobject(anyobject)
{
    //anyobject is just a way to tell the function to be flexible and work with any object you pass to it. It's a simple way to make functions more versatile and reusable!

    console.log(`username is ${anyobject.username} and thier ${anyobject.price}is this`);

}
handleobject(user);
const arrayw=[20,44,55,34,21]
// like with other programing language we no need too pass the [] and explictly saying to take array as parameter it will autometically take an array

function second(Array)
{
    return Array[1];

}
console.log(second(arrayw));