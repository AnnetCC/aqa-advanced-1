const validateAge = age => age >= 18;
const getMessage = isAdult => `Person is ${isAdult ? '' : 'not '}adult`;

console.log(getMessage(validateAge(25)));
console.log(getMessage(validateAge(15)));
