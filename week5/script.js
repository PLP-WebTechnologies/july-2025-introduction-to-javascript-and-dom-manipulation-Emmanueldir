// Variable Declarations
let name = "John";
let age = 20;
let isStudent = true;

// Conditional Statements
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

if (isStudent) {
    console.log(name + " is a student.");
}

// Functions
function greetUser() {
    document.getElementById("output").textContent = "Hello, " + name + "!";
}

function addNumbers(a, b) {
    return a + b;
}

// Loops
for (let i = 1; i <= 3; i++) {
    console.log("For loop count: " + i);
}

let count = 1;
while (count <= 3) {
    console.log("While loop count: " + count);
    count++;
}

// DOM Interactions
// 1. Change text content
document.getElementById("title").textContent = "Simple JavaScript Demo Page";

// 2. Add event listener
document.getElementById("greetBtn").addEventListener("click", greetUser);

// 3. Modify style + show calculation
document.getElementById("calcBtn").addEventListener("click", function() {
    let result = addNumbers(5, 10);
    let output = document.getElementById("output");
    output.textContent = "5 + 10 = " + result;
    output.style.color = "green";
});
