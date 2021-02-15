let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display_result = document.querySelector("#display_result");

add.addEventListener("click", function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = AddTwoNumbers(num_1, num_2);
});

subtract.addEventListener("click", function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = SubtractTwoNumbers(num_1, num_2);
});

multiply.addEventListener("click", function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = MultiplyTwoNumbers(num_1, num_2);
});

divide.addEventListener("click", function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = DivideTwoNumbers(num_1, num_2);
});

function AddTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}


function SubtractTwoNumbers(a, b) {
    let difference = a - b;
    return difference;
}

function MultiplyTwoNumbers(a, b) {
    let product = a * b;
    return product;
}

function DivideTwoNumbers(a, b) {
    let quotient = a / b;
    return quotient;
}





