const array = [5, 7, 10, 7, 12, 5, 5, 8, 11, 10, 7, 5, 6, 14, 20];

function arrayOperation(array){
    const uniqueArray = Array.from(new Set(array));
    return uniqueArray.sort((a, b) => a - b);
}
console.log(arrayOperation(array));