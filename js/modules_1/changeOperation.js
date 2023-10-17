import opearationTypes from "./operationTypes";

export let selectedOperation = opearationTypes.MINUS;

const changeOperation = (newOperation) => {
    let newSelected = null;
    $(opearationTypes).each(function (key, value) {
        if (value.id == newOperation) {
            newSelected = value;
        }
    });

    if (newSelected != null) {
        selectedOperation = newSelected;
        $('#currentOperation').html('' + selectedOperation.id);
        return;
    }
    alert('operation no supported!');
}; 
export default changeOperation;

