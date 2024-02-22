/*if(true)
{
    let a=20;
const b=88;
var c=90;


}
//console.log(a);// we get a is not defined this is because we declared inside the block as rule it can not be accessible from out side of the block;

//console.log(b);// same with the const 
console.log(c);// but it will print the c value because it  will accessible from outside of the block;
// now a day we are not using var keyword >>>>
*/
//>>>>>>>>>>..FUNCTION ISNIDE THE FUNCTION>>>>>>>
/*function one()
{
    const username ="Sehgalsumit"
    function two()
    {
        const website="shhshs.http.log.in"
        console.log(username);
    }
    //console.log(website);// here outside of the block we can not acess ;

    two()
}

one();
*/
// here first it will call function one and inside the function one there is an another function that is two
function add()
{
    var x=12;
    let y=20;
    const t=33;
    sub();
    
    function sub()
    {
        var xx=120;
        let yy=200;
        const tt=330;
       // console.table(x,y,t);
       console.table({ xx, yy, tt });

    }
   
   // console.table(x,y,t);
//console.table(xx,yy,tt);
}
//console.table(x,y,t);
//console.table(xx,yy,tt);
add();