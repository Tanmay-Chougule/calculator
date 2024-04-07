let num1=0,num2=0,operator="";
function add(num1,num2){
    return num1+num2;
};
function subtract(num1,num2){
    return num1-num2;
};
function multiply(num1,num2){
    return num1*num2;
};
function divide(num1,num2){
    return num1/num2;
};
let display=document.querySelector('.Display');
const secondary_display=document.querySelector('.secondary_display');
let buttons=document.querySelectorAll('.button');
buttons.forEach(button=>button.addEventListener('click', handleClick));
function handleClick(e){
    let clickedButton=e.target;
    if (isNaN(clickedButton.textContent)) {
        operator=clickedButton.textContent;
        display.textContent+=operator;
    } else {
        if (operator==="") {
            num1=""+num1+clickedButton.textContent;
            num1=Number(num1);
            display.textContent=num1;
        } else {
            num2=""+num2+clickedButton.textContent;
            num2=Number(num2);
            display.textContent=num2;
        }
    }
    if(num2===0){
        secondary_display.textContent=num1+operator;
    }
    if(num2!==0){
        secondary_display.textContent=num1+operator+num2;
    }
}
function operate(num1,num2,operator){
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}
const equal=document.querySelector('.equal');
equal.addEventListener('click',calculate);
function calculate() {
  let result = operate(num1, num2, operator);
  result=cutDecimals(result,3);
  display.textContent = result;
  secondary_display.textContent=num1+operator+num2+"=";
  // reset the values of num1, num2, and operator
  num1 = result;
  num2 = 0;
  operator = "";
}
const clear=document.querySelector('.clear');
clear.addEventListener('click',fun_clear);
function fun_clear(){
    num1=num2=0;
    operator="";
    display.textContent=0;
    secondary_display.textContent="";
}
const backspace=document.querySelector('.backspace');
backspace.addEventListener('click',fun_backspace);
function fun_backspace() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);

    if (display.textContent.length === 0) {
        display.textContent = 0;
        if (operator !== "" && num2 !== "") {
            num2 = num2.toString().substring(0, num2.toString().length - 1);
            display.textContent = num1 + operator + num2;
        }
        else if(operate!=="" && num2===""){
            operator="";
            display.textContent=num1;
        }
         else {
            num1 = num1.toString().substring(0, num1.toString().length - 1);
            display.textContent = num1;
        }
    } else if (operator !== "") {
        num2 = display.textContent.substring(num1.toString().length + 1);
    } else {
        num1 = Number(display.textContent);
    }
}
const decimal=document.querySelector('.decimal');
decimal.addEventListener('click',addDecimal);
function addDecimal(){
    if(operator!==""){
        if(!num2.toString().includes(".")){
            num2+=".";
        }
        display.textContent=num2;
    }
    else{
        if(!num1.toString().includes(".")){
            num1+=".";
        }
        display.textContent=num1;
    }
}
function cutDecimals(number,decimals){
    return number.toLocaleString('fullwide', {maximumFractionDigits:decimals})
}
window.addEventListener('keydown',handleKeyboardInput);
function handleKeyboardInput(e) {
    const key = e.key;
    let button = null;
  
    // Map keyboard keys to corresponding calculator buttons
    switch (key) {
    case '1':
        button = document.querySelector('.button.num-1');
        break;
    case '2':
        button = document.querySelector('.button.num-2');
        break;
    case '3':
        button = document.querySelector('.button.num-3');
        break;
    case '4':
        button = document.querySelector('.button.num-4');
        break;
    case '5':
        button = document.querySelector('.button.num-5');
        break;
    case '6':
        button = document.querySelector('.button.num-6');
        break;
    case '7':
        button = document.querySelector('.button.num-7');
        break;
    case '8':
        button = document.querySelector('.button.num-8');
        break;
    case '9':
        button = document.querySelector('.button.num-9');
        break;
    case '0':
        button = document.querySelector('.button.num-0');
        break;
    case '+':
        button = document.querySelector('.button.add');
        break;
    case '-':
        button = document.querySelector('.button.subtract');
        break;
    case '*':
        button = document.querySelector('.button.multiply');
        break;
    case '/':
        button = document.querySelector('.button.divide');
        break;
    case '.':
        button = document.querySelector('.decimal');
        break;
    case 'Enter':
        button = document.querySelector('.equal');
        break;
    case 'Backspace':
        button = document.querySelector('.backspace');
        break;
    case 'Escape':
        button = document.querySelector('.clear');
        break;
    default:
        break;
    }

    if (button) {
    button.click(); // Trigger the click event on the corresponding button
    }
}  