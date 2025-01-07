function setFullName(object, string){
    object.fullName = string;
}

const person = {
    fullName: 'Popov Konstantin',
    age: 21,
    height: 181
};

const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");

console.log(person.fullName);