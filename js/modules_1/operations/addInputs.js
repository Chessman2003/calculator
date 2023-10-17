const addInputs = () => {
const operandFields = $("#operandFields");
const setterOperands = $("#setterOperands");
$("updateOperands").on("click", function (e) {
    const countOperands = setterOperands.value; // проверять на цифры
    $("operandFields").append('');
    for (let i = 0; i < countOperands; i++) {
        const newOperandField = $("input").addClass('operandField').attr('id', 'operandField_' + i);
        operandFields.append(newOperandField);
    }
});
const resMiddleValueOperation = $("#resMiddleValueOperation");
$("#runMiddleValueOperation").on("click", (e) => {
    const operandFields = $('#testArea, #operandFields, .operandField,');
    const values = [];
    for (let operField of operandFields) {
        values.push(parseInt(operField.value));
    }

    let tempValue = 0;
    values.forEach(v => {
        tempValue += v;
    })
    tempValue /= values.length;
    resMiddleValueOperation.value = tempValue;
});
};
export default addInputs;