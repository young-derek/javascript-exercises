const findTheOldest = function (peopleArray) {
    let currentYear = new Date().getFullYear();
    let oldestPerson = {};
    let i = 0;

    peopleArray.reduce(function (previousValue, currentValue) {
        if (typeof currentValue.yearOfDeath === "undefined") {
            if (currentYear - currentValue.yearOfBirth > previousValue) {
                oldestPerson = peopleArray[i];
                i++;
                return currentYear - currentValue.yearOfBirth;
            }
        }
        else {
            if (currentValue.yearOfDeath - currentValue.yearOfBirth > previousValue) {
                oldestPerson = peopleArray[i];
                i++;
                return currentValue.yearOfDeath - currentValue.yearOfBirth;
            }
        }
    }, 0);
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
