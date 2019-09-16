// console.log("Welcome");
// alert("Welcome");
var dc1 = prompt("Enter the number of first dice:- ");
var numb = Math.random();
numb = Math.ceil(numb * 6);
var dc2 = prompt("Enter the number of second dice:- ");
var numb1 = Math.random();
numb1 = Math.ceil(numb1 * 6);
console.log("Random :- "+numb +" "+numb1)
console.log("User input:- "+dc1 +" "+dc2)
if(numb === parseInt(dc1)){
    console.log("Correct "+ numb + " " + dc1);
} else{
    console.log("InCorrect "+ numb + " " + dc1); 
}
if(numb1 === parseInt(dc2)){
    console.log("Correct "+ numb1 + " " + dc2);
} else {
    console.log("InCorrect "+ numb1 + " " + dc2); 
}
