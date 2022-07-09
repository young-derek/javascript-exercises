const sumAll = function (num1, num2) {

    if (typeof num1 != "number"
        || typeof num2 != "number"
        || num1 < 0
        || num2 < 0) {
        return "ERROR";
    }

    let smallNumber = Math.min(num1, num2);
    let bigNumber = Math.max(num1, num2);
    let total = 0;

    for (; smallNumber <= bigNumber; smallNumber++) {
        total += smallNumber;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
