const myhero=["tillu","Tikka","MAlkhan","NAlla"];
const some=["Saxcena","Happu","GulfamKali"];
//myhero.push(some);
//console.log(myhero);
// it will treat a whole array as single element
//console.log(myhero[4]);
// it will treat a whole array as a single elemet in array and if we want to accese some particualar element then we will have to pass 2 parametere;
//console.log(myhero[4][1]);
// it will give // an output Happu beacuse it is preasent at one index;
// one method that is concat it will return the new Array but push will return the exicting array;
//const neww=myhero.concat(some);
//console.log(neww);
//>>>>>>>>>>Spread Operator>>>>>>
// in spread Operator work as Same but here we are Able to pass multiple Parametere;

const Spreadop=[...myhero,...some];
console.log(Spreadop);
const Anotherarray=[1,3,4,[5,5,6],[7,8,9],99,654,3,,4,6,7];
const real_another_array=Anotherarray.flat(Infinity);
console.log(real_another_array);
// it will add all array in one format;
const text="sumit";
console.log(Array.from(text));
// array.from will make an whole String in char array;



