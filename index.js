let firstname = "Rohit";
let username = window.prompt("What is your name?");
let age= window.prompt("What is your age?");
age = Number(age);
age += 1;

document.getElementById("p1").innerHTML = "Hello " + username;
document.getElementById("p2").innerHTML = "You will be " + age + " years old";

console.log(username);
