const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }
    if (a === b)
        return a;
    let result = 0;
    let end = 0;
    if (a < b) {
        result = a; end = b;
    }
    else {
        result = b;
        end = a;
    }
    for (let i = result + 1; i <= end; i++) { result += i; }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
