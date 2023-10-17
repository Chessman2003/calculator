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
};
export default operationNegative;