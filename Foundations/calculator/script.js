let curr = ""
let prev = ""
let operation = ""
let display = document.getElementById('display')
let upperDisplay = document.getElementById('upper-display')


function appendToDisplay(value) {
    curr += value
    display.value = curr
}

function remove_one_digit() {
    if (curr !== "") {
        curr = curr.slice(0, -1)
        display.value = curr
    }
}

function handleOperator(value) {
    operation = value;
    prev = curr
    upperDisplay.textContent = prev+ operation
    display.value = ""
    curr = ""
}

function clearDisplay() {
    curr = ""
    prev = ""
    operation = ""
    upperDisplay.textContent= ""
    display.value = ""
}

function calculate() {
    if (curr === "" || prev === "") {
        alert("Please enter a number and an operator.");
        return;
    }

    let num1 = parseFloat(prev);
    let num2 = parseFloat(curr);
    let result = "";

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            // Handle division by zero
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            alert("Invalid operator");
    }

    // Update display and variables for next calculation
    curr = result.toString();
    prev = "";
    operation = "";
    upperDisplay.textContent = ""
    display.value = curr;
}
