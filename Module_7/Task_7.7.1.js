function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Константин",
    age: 21
};

printInfo.call(person);