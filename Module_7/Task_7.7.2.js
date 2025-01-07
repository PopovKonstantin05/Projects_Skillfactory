function calculate(a, b, operator){
    if(operator === '+'){
        return a + b;
    } else if(operator === '-'){
        return a - b;
    } else if(operator === '*'){
        return a * b;
    } else {
        return a / b;
    }
}

const obj = {
    a: 1,
    b: 1,
    operator: '/'
};
console.log(calculate.apply(obj, [2, 3, '+']));