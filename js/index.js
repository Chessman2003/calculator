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

const findResultElementById = (id) => {
    let elem = document.getElementById(id);
    if (elem != null) {
        return elem;
    }
    alert('Все плохо');
    console.log('');
    return null;
}

const operationPlus = (valueOperands) => {
    return parseInt(valueOperands[0]) + parseInt(valueOperands[1]);
}

const operationMinus = (valueOperands) => {
    return parseInt(valueOperands[0]) - parseInt(valueOperands[1]);
}
const operationMultiplication = (valueOperands) => {
    return parseInt(valueOperands[0]) * parseInt(valueOperands[1]);
}
const operationDivision = (valueOperands) => {
    return parseInt(valueOperands[0]) / parseInt(valueOperands[1]);
}

const operationAddArray = (valueOperands) => {
    let arrOper1 = valueOperands[0].split(",");
    let arrOper2 = valueOperands[1].split(",");
    let arrRes = [];
    
    if (arrOper1.length > arrOper2.length) {
        for (let i = 0; arrOper1.length - arrOper2.length; i++) {
            arrOper2.push('0');
        }
    } else {
        for (let i = 0; arrOper2.length - arrOper1.length; i++) {
            arrOper1.push('0');
        }
    }

    for (let i = 0; i < arrOper1.length; i++) {
        const t = parseInt(arrOper1[i]) + parseInt(arrOper2[i]);
        arrRes.push(t);
    }
    return arrRes.join(',');
}

const operationNegative = (valueOperands) => {
    const value = valueOperands[0];
    // Todo: need correct operation result
    if (value == 'false') {
        return 'true';
    } else if (value == 'true') {
        return 'false';
    }
    alert('Value must be true or false');
    console.error('Value must be true or false');
    return 'false';
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
    },
    ADDARRAY: {
        id: 'addArray',
        operation: operationAddArray
    },
    NEGATIVE: {
        id: 'negative',
        operation: operationNegative
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


const executeOperation = (operands, operation) => {
    let result = {
        value: '',
        error: ''
    }

    if (operation == null) {
        result.error = 'not selected operations';
        return result;
    }

    for (let i = 0; i < operands.length; i++) {
        if (operands[i] == null) {
            result.error = 'operand '+i+' empty';
            return result;
        }
    }

    let valueOperands = [];
    
    for (let i = 0; i < operands.length; i++) {
       valueOperands.push(operands[i].value);
    }
   
    result.value = operation(valueOperands);
    return result;
}

const runApp = () => {

    const operand1 = findOperandById('num1');
    const operand2 = findOperandById('num2');

    let operationElements = document.querySelectorAll('#appCalculator #operationSelector #allOperations .operation');
    for (let operElem of operationElements) {
        operElem.addEventListener("click", (e) => {   
            const operId = e.target.attributes['idoperation'].value;
            changeOperation(operId);
            if (operId ==  opearationTypes.NEGATIVE.id) {
                if (!operand2.classList.contains('hidden')) {
                    operand2.classList.add('hidden');
                }
            } else {
                if (operand2.classList.contains('hidden')) {
                    operand2.classList.remove('hidden');
                }
            }
        })
    }

    

    const resultElem = findResultElementById('result');
    
    const handlerExecuteOperations = () => {
        let operands = [];
        if (selectedOperation.id == opearationTypes.NEGATIVE.id) {
            operands.push(operand1);
        } else {
            operands.push(operand1);
            operands.push(operand2);
        }
        const res = executeOperation(operands, selectedOperation.operation);
        if (res.error) {
            resultElem.innerHTML = res.error;
            return;
        }
        resultElem.innerHTML = res.value;    
    }
    
    const operButton = document.getElementById('operationButton');
    operButton.addEventListener("click", handlerExecuteOperations);
}

runApp();