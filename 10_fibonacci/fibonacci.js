const fibonacci = function (input) {
    let currentNumber = 1;
    let num1 = 0;
    let num2 = 0;
    let numberArray = [];

    if (input >= 0) {
        while (numberArray.length < input) {
            numberArray.push(currentNumber);
            num2 = num1;
            num1 = currentNumber;
            currentNumber = num1 + num2;
        }
    }
    else {
        return "OOPS";
    }

    return numberArray[input - 1];
};

// Do not edit below this line
module.exports = fibonacci;
