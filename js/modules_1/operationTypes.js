import operationDivision from "../../operations/operationDivision";
import operationMinus from "../../operations/operationMinus";
import operationMultiplication from "../../operations/operationMultiplication";
import operationPlus from "../../operations/operationPlus";

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
};
export default opearationTypes;