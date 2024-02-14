//const tinderUser = new Object();
/*const tinderuser ={};
tinderuser.id="122abs";
tinderuser.name="dectotar";
tinderuser.email="shsneuusn@gmail.com";
tinderuser.mobileno=8674483883;
console.log(tinderuser);
// another way of declaring the object;
*/
// objcet inside Object to declare;
const regularuser={
    email: "hdhhsjjjs@gmail.com",
    fullname:{
        username:
        {
            firstname:"sumit",
            lastname : "sehgal"
        }

    }


}
//console.log(regularuser.fullname.username.firstname);
console.log(Object.keys(regularuser.fullname.username));
// it will give the key means what the keys are contain in this program
console.log(Object.values(regularuser.fullname.username));
// it will goive the values of the Object with the helps of Object.values


