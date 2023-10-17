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
};
export default operationAddArray;