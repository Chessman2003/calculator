let count;

/*const opearationTypes = [
    '+',
    '/',
    '-',
    '*'
];

let selectedOperation = opearationTypes[0];
*/


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

const result = {
    value: '',
    error: ''
}

const operationPlus = (value1, value2) => {
    return value1 + value2;
}

const operationMinus = (value1, value2) => {
    return value1 - value2;
}
const operationMultiplication = (value1, value2) => {
    return value1 * value2;
}
const operationDivision = (value1, value2) => {
    return value1 / value2;
}

const opearationTypes = {
    MINUS: {
        id: '-',
        operation: operationMinus
    },
    PLUS: {
        id: '+',
        operation: operationPlus
    },
    MULTIPLICATION: {
        id: '*',
        operation: operationMultiplication
    },
    DIVISION: {
        id: '/',
        operation: operationDivision
    }
}

let selectedOperation = opearationTypes.MINUS;

const changeOperation = (newOperation) => {
    let newSelected = null;
    Object.entries(opearationTypes).forEach(([key, value]) => {
        if (value.id == newOperation) {
            newSelected = value;
        }
    })

    if (newSelected != null) {
        selectedOperation = newSelected;
        const currentOper = document.getElementById('currentOperation');
        currentOper.innerHTML = ''+selectedOperation.id;
        return;
    }
    alert('operation no supported!');
}


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
    let valueOperand1 = parseInt(operand1.value);
    let valueOperand2 = parseInt(operand2.value);
    if (operation == null) {
        result.error = 'not selected operations';
        return result;
    }

    result.value = operation(valueOperand1, valueOperand2);
    return result;
}

const handlerExecuteOperations = () => {
    const res = executeOperation(operand1, operand2, selectedOperation.operation);
    if (res.error) {
        resultElem.innerHTML = res.error;
        return;
    }
    resultElem.innerHTML = res.value;    
}

const handlerChangeOperations = (idOperation) => {

    changeOperation(idOperation);
}
  
const operButton = document.getElementById('operationButton');
operButton.addEventListener("click", handlerExecuteOperations);
