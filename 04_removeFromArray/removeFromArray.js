const removeFromArray = function(inputArray, ...args) {
    for (let i = 0; i < inputArray.length; i++)
    {
        if (args.includes(inputArray[i]))
        {
            inputArray.splice(i, 1);
            i--;
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
