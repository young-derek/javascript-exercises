const reverseString = function(input) {
    let reversedString = "";
    for(let i = input.length; i > 0; i--)
    {
        reversedString += input[i - 1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
