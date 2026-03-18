const leapYears = function (num) {
    if (num % 100 === 0)
        return (num % 400 === 0);
    else
        return (num % 4 === 0);

};

// Do not edit below this line
module.exports = leapYears;
