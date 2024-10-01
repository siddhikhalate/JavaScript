const name ="Siddhi"
const repoCount = 50

// console.log(name + repoCount + "Value" );

console.log(`Hello my name id ${name} and my repo count is ${repoCount}`);

const gameName = new String('Siddhi-kh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   siddhi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://siddhi.com/siddhi%20khalate"

console.log( url.replace('%20','-'));

console.log(url.includes('siddhi'));

console.log(gameName.split('-'));







