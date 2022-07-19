const caesar = function (inputString, inputNumber) {
    let array = inputString.split('');
    let upperCaseLetter = /[A-Z]/;
    let lowerCaseLetter = /[a-z]/;
    let newCharacter = 0;

    array.forEach((element, index) => {
        newCharacter = element.charCodeAt(0) + (inputNumber % 26);
        if (upperCaseLetter.test(element)) {
            if (newCharacter < 65) {
                array[index] = String.fromCharCode(newCharacter + 26);
            }
            else if (newCharacter > 90) {
                array[index] = String.fromCharCode(newCharacter - 26);
            }
            else {
                array[index] = String.fromCharCode(newCharacter);
            }
        }
        if (lowerCaseLetter.test(element)) {
            if (newCharacter < 97) {
                array[index] = String.fromCharCode(newCharacter + 26);
            }
            else if (newCharacter > 122) {
                array[index] = String.fromCharCode(newCharacter - 26);
            }
            else {
                array[index] = String.fromCharCode(newCharacter);
            }
        }
    });

    return array.join('');
};

// Do not edit below this line
module.exports = caesar;
