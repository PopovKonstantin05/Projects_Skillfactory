const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const array = [];

for (let i in obj){
    if (typeof obj[i] === "object"){
        for (let j = 0; j < obj[i].length; j++){
            array.push(obj[i][j]);
        }
    } else {
      array.push(obj[i]);
    }
}
console.log(array);