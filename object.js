////>>> Literals>>>
mySysbol=Symbol("hello");
const jsusre={
    name : "sumit",
    "full_name" : "Sehgal",
    // we dont have an option to acess the full name without using square braces dot operator will not give me the exact value;
   [mySysbol]:"hello",
   // here hello will treated as String type but if we want to take it as a String type compulsory we have to put with Square Braces;


    age :22,
    location: "jabalpur",
    email: "shsusss@gmail.com",
    isloggedIn: false,
    lastlOaction :["Monday","saturday"]
}

///way of accesiing is 
//>>> first with dot operator;
console.log(jsusre.age);
// Second way to check by using square braces and it is the best way to access;
console.log(jsusre["age"]);
// here we must enclosed with double braces and if we dont take it an double braces it will thfreow an Error because it will treated as a variable;
console.log(jsusre["full_name"]);
console.log(jsusre["location"]);
// if we want to change an or we can say want to update some value we will simply done with the help of from;
jsusre.email="sehgalsuseem@ytube.com";
console.log(jsusre["email"]);
// here we will update the emial value and put the new value in it ;
// but if we want to fredge some value then we will simply use the fredge 
//Object.freeze(jsusre);
// it will simply firedge after this we will not update the value of email;
jsusre.email="yebsbyen@haj.com";
console.log(jsusre["email"]);
// sehgalsuseem@ytube.com
//sehgalsuseem@ytube.com>>> in both Scinerio we will get the same output we will not get an error but change will included
jsusre.greeting=function()
{
    console.log("Hello js user");
}
console.log(jsusre.greeting());






