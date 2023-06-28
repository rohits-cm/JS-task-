let firstname = "Rohit";
let username = window.prompt("What is your name?");
// let age=24;
let age= window.prompt("What is your age?");
age = Number(age);
age += 1;
// let student = true;

// age= age+1;

// console.log(firstname);
// console.log("you will be", age , " years old");
// console.log("Enrolled:",student);
document.getElementById("p1").innerHTML = "Hello " + username;
document.getElementById("p2").innerHTML = "You will be " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

console.log(username);
