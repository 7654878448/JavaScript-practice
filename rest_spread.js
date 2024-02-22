function add(a,...num1)// it is an rest operator and it wil make an value in the form of object
{
    let sum=0;
    for(let i of num1)
    {
        sum=sum+i;  

    }
    sum=sum+a;
    
    console.log(sum);


    console.log(num1);
}

add(2,3,4,45,4);
let obj={
    title:"fuccker",
    Case:"giveup",
    achieve:"nothing",
    goal:"no",
    selfDoubt:"fullon"


}
// destructoring
let {title,...remaining}=obj
console.log(title,remaining);
console.log(Object.keys(obj));
console.log(Object.values(obj));