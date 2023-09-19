const person = {
    firstName: "Anna",
    lastName: "Hritskova",
    age: 26
}
person.email = "mynewemail@gmail.com";
delete person.age;

console.log(person);