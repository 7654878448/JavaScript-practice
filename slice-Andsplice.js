const arr=[1,2,3,0,5,6,7,8,9,10];
console.log(arr);
const newarr=console.log(arr.slice(2,6));
//it will take as parameter from index 2 too 5;
const splicearr=arr.splice(2,5);
// it will modifies the Exicting array and make a new array and it will simply affect the exicting array
const so=arr.splice(1,2,0);
console.log(arr);

// here we will trying to modify the Exicting array and it will take 3 parameter 1St one is where to start and secone which one to modify and third what to add new;;
const arr2=arr.splice(1,0,234);
// either 0 available or not it will simply move that index and new element at that particular index;
// in here we are just trying to add new element at index 1 where we set an value 0 thats denotes not 0 is availabele it will simplye add 0

console.log(arr);
const months = ['Jan', 'March', 'April', 'June'];
// splice will affect the orginal array and slice will make an copy of an exicting array;

months.splice(1, 0, 'Feb');
// it will add at index 1 and with o value it will replace feb
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: A/rray ["Jan", "Feb", "March", "April", "May"]
const my= [1,3,5,556,66,7];
console.log(my.slice(1,3));
// it will make an copy of an Exicting array and make a new Araray;
// it will not include an last index means it will from 1and 2 only not three;



