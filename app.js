function add(x,y){ return x + y;}
function subtract(x,y){ return x - y;}
function multiply(x,y){ return x * y;}
function divide(x,y){ return x / y; }
function operate(operator,x,y){ 
    switch (operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case 'x':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            console.log('operator doesnt exist');
    }
}
function buttonPress(){
    let numbers = document.querySelector('.numbers')
    let operators = document.querySelector('.operators')
    let currentDisplay = document.querySelector('.display').innerText;
    if (numbers.contains(this)){
        let display = document.querySelector('.display');
        // display.innerHTML += this.innerText;
        if (operator == ''){
            number1 += this.innerText;
            display.innerText = number1;
        } else {
            number2 += this.innerText;
            display.innerText = number2;
            console.log(number2);
        }
    } else if (operators.contains(this)){
        if (this.innerText == 'C') {
            number1 = '';
            number2 = '';
            operator = '';
            let display = document.querySelector('.display');
            display.innerText = '';
            return;
        }
        if (!currentDisplay) { return; }
        if (operator == '') {
            operator = this.innerText;
        } else {
            let result = operate(operator,parseInt(number1),parseInt(number2));
            let display = document.querySelector('.display');
            display.innerHTML = result;
            number1 = result.toString();
            number2 = '';
            if (this.innerText != '='){
                operator = this.innerText;
            } else {
                operator = '';
            }
            console.log([number1,number2,operator]);
        }
    }
}

let number1 = '';
let number2 = '';
let operator = '';
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',buttonPress);
});

