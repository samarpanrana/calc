// DOM and Query selectors
let screen = document.querySelector('.screen');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operators div');
let ac = document.querySelector('.ac');
let operationActive = false;

let firstNum, secondNum, operation;

ac.addEventListener("click", (e) => {
    screen.textContent = ``;
    firstNum = ``;
    secondNum = ``;
    operation = ``;
    resetEffect();
})

// OPEATIONS for calc
function add (firstNum, seconNum) {
    return +firstNum + +seconNum;
}

function sub (firstNum, seconNum) {
    return firstNum - seconNum;
}

function mul (firstNum, seconNum) {
    return firstNum * seconNum;
}

function div (firstNum, seconNum) {
    if (firstNum % seconNum == 0) {
        return firstNum / seconNum;
    }
    return (firstNum / seconNum).toFixed(2);
}


for (number of numbers) {
    number.addEventListener("click", (e) => {
        let target = e.target;
        if (operationActive) {
            screen.textContent = ``;
            screen.textContent += target.textContent;
        }
        else {
            screen.textContent += target.textContent;
        }
        operationActive = false;
    })
}

for (operator of operators) {
    operator.addEventListener("click", (e) => {
        let target = e.target;
        // if equals to do operation
        if (target.textContent == '=') {
            secondNum = screen.textContent;
            // console.log(firstNum, secondNum, operation);
            let result = operate(firstNum, secondNum, operation);
            
            screen.textContent = result;
            resetEffect();
        }
        else {
            store(target);
        }
        operationActive = true;
    })
}

// store values
function store (target) {
    firstNum = screen.textContent;
    operation = target.textContent;
    screen.textContent = firstNum;
    operationEffect();
}

// operate on values
function operate (firstNum, secondNum, operation) {
    switch (operation) {
        case '/':
            return div(firstNum, secondNum);
        case '*':
           
            return mul(firstNum, secondNum);
        case '-':
            
            return sub(firstNum, secondNum);
        case '+':
            
            return add(firstNum, secondNum);
    }
}

// show clicked css
function operationEffect() {
    let string 
    switch (operation) {
        case '/':
            string = 'divide';
            break;
        case '*':
            string = 'multiply';
            break;
        case '-':
            string = 'subtract';
            break;
        case '+':
            string = 'add';
            break;
    }
    resetEffect();
    let button = document.querySelector(`.${string}`);
    button.style.background = `rgb(202 250 253)`;
    button.style.color = 'red';
    button.style.fontWeight = 'bolder';
}

function resetEffect () {
    for (operator of operators) {
        operator.style.background = ``;
        operator.style.color = '';
        operator.style.fontWeight = '';
    }
}