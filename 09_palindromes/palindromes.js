const palindromes = function (inputString) {
    return inputString.toLowerCase().match(/[a-z]/g).join("") == inputString.toLowerCase().match(/[a-z]/g).reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
