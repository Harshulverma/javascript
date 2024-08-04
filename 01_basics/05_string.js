const name="harshul"
const marks=50

//console.log(name+marks);
console.log(`hello my name is ${name} and my marks is ${marks}`);

const gameName =new String('Harshul')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newstring=gameName.substring(0,4)
console.log(newstring);

const anotherstring =gameName.slice(-8,4)
console.log(anotherstring);

const newstring1="  hitesh  "
console.log(newstring1);
console.log(newstring1.trim());

const url="https://harshul.com/harshul%20verma"

url.replace('%20','-')
console.log(url.replace('%20','-'));
