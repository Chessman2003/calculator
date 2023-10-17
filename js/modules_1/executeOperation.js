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
            result.error = 'operand ' + i + ' empty';
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
export default executeOperation;