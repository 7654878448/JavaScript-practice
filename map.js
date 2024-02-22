//>>>>>>>>>>>>>>>MAP METHOD>>>>>
/*const arr=[3,4,5,6,7,8,99,2];
 const res=function square(number,index) {
    return `index :${index},square of that number are :${number*number}`;

    
}
const mapp=arr.map(res)
console.log(mapp);
*/
const month=["january","febuary","march",'april','march'];
const result=month.map((moth,index)=>{
    console.log(moth);
    return `months:${moth},and their indexing are ${index}`;
    // when we try to return multiple value durning call back it will only return the last value ex>> return moth,index then it will return only index not month;
})
console.log(result);
//The map() function returns a new array containing 
//the results of applying the callback function to each element of the input array. The original array remains unchanged.
