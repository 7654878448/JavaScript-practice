//>>>>>>>>>>>continusoly used in React>>>

const course={
    coursename: "javaPrograming",
    courseteacher:"ashok Sir",
    Coursefee:"999",


}
const{courseteacher:teacher}=course
// here we are trying to modify the name of a teacher;
console.log(teacher);
//Destructuring in JavaScript is a convenient way to extract values from objects or arrays and assign them to variables. It allows you to unpack values from arrays or properties from objects into distinct variables easily.
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'
const {coursename,courseteacher,Coursefee}=course;
// here we are trying to destructure the inside variable
console.log(coursename);

