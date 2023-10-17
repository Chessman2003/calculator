import { selectedOperation } from "./changeOperation";
import changeOperation from "./changeOperation";
import opearationTypes from "./operationTypes";
import executeOperation from "./executeOperation";

const runApp = () => {

    const operand1 = $('#num1');
    const operand2 = $('#num2');

    let operationElements = $('#appCalculator, #operationSelector, #allOperations, .operation');
    for (let operElem of operationElements) {
        $(operElem).on("click", (e) => {
            const operId = $('e.target').attr('idoperation').value;
            changeOperation(operId);
            if (operId == opearationTypes.NEGATIVE.id) {
                if (!operand2.hasClass('hidden')) {
                    operand2.addClass('hidden');
                }
            } else {
                if (operand2.hasClass('hidden')) {
                    operand2.removeClass('hidden');
                }
            }
        })
    }



    const resultElem = $('#result');

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
            resultElem.html(res.error);
            return;
        }
        resultElem.html(res.value);
    }

    $("#operationButton").on("click", handlerExecuteOperations);
}
export default runApp;