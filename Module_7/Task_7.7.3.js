const userArray = [{name: "Иван", age: 16}, {name: "Николай", age: 17}, {name: "Артём", age: 18}, {name: "Андрей", age: 19}, {name: "Даниил", age: 20}];

const newUserArray = userArray.filter((obj) => {return obj.age >= 18});
const nameUserArray = userArray.map((obj) => {return obj.name});

console.log(newUserArray);
console.log(nameUserArray);