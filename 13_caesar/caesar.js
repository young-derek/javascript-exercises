const caesar = function(inputString, inputNumber) {
    let array = inputString.split('');
    let regex = /[A-Za-z]/;

    array.forEach((element, index) => {
        if (regex.test(element))
        {
            array[index] = String.fromCharCode(element.charCodeAt(0) 
                    + (inputNumber % 26));
        }
    });

    return array.join('');
};

// Do not edit below this line
module.exports = caesar;
