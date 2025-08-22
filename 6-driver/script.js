let hasLicence = true;
let isDrunk = false;
let age = 19;

console.log(`Пользователь ${(hasLicence && (age > 18) && !(isDrunk)) ? ("может") : ("не может")} вести машину!`);

