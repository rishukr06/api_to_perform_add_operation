const calculator = (number1, number2, ops) => {
    let ans;
    if (ops === 'sum') {
        ans = Number(number2) + Number(number1);
    }

    if (ops === 'subtract') {
        ans = Number(number2) - Number(number1);
    }

    if (ops === 'multiply') {
        ans = Number(number2) * Number(number1);
    }

    if (ops === 'divide') {
        ans = Number(number2) / Number(number1);
    }

    return ans;
}

module.exports = calculator
