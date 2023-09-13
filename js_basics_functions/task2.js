const isAdult = age => age >= 18;
const message = isAdult => `Person is ${isAdult ? '' : 'not '}adult`;

console.log(message(isAdult(25)));
console.log(message(isAdult(15)));
