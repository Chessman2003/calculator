const findOperandById = (id) => {
    let elem = document.getElementById(id);
    if (elem != null) {
        return elem;
    }
    alert('Все плохо');
    console.log('');
    return null;
}

const operand1 = findOperandById('num1');
const operand2 = findOperandById('num2');

const findResultElementById = (id) => {
    let elem = document.getElementById(id);
    if (elem != null) {
        return elem;
    }
    alert('Все плохо');
    console.log('');
    return null;
}

const resultElem = findResultElementById('result');
const executeOperation = (operand1, operand2, operation) => {
    let result = {
        value: '',
        error: ''
    }
    if (operand1 == null) {
        result.error = 'operand 1 empty';
        return result;
    }

    if (operand2 == null) {
        result.error = 'operand 2 empty';
        return result;
    }
    if (operation == null) {
        result.error = 'not selected operations';
        return result;
    }

    result.value = operation(valueOperand1, valueOperand2);
    return result;
}


const func = () => {
let result;
let text1 = document.getElementById("num1").value;
let text2 = document.getElementById("num2").value;
result = text1 + text2;
document.getElementById("result").innerHTML = result;
}
