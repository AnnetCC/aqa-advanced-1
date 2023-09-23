let users = [];
for (let i = 0; i < 8; i++) {
users.push({
    firstName: "New" + i,
    lastName: "User" + i,
    login: "new_super_user" + i,
    email: "newuseremail" + i +"@gmail.com",
    age: 18 + i
});
}

for( const {firstName, lastName, login, email, age} of users) {
console.log(`User ${firstName} ${lastName} has ${age} years old, has login ${login} and email ${email}.`);
}