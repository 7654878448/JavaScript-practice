let count=1;
let greet=()=>{
    console.log(`i am an greete ${count}`)
    count++;
}
 let interval=setInterval(() => {
    greet();
    
}, 1000);
/*
Note>>>>set interval will run contiously it will not stop util we dont stop it and we will stop with help of clear interval and with this it will stop
SetTimeOut will run with some specfic time and it will stop at some point of time 
*/


setTimeout(() => {
    clearInterval(interval)
    
}, 5000);
// console.log(new Date().toLocaleTimeString());
// setTimeout(() => {
//     console.log(new Date().toLocaleTimeString());
    
// }, 6000);