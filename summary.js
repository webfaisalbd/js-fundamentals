var tableLength = 12;
var tourdestination = ['coxsBazar', 'nepal', 'Bhutan', 'Paris'];
var index = tourdestination.indexOf('Bhutan');
console.log(index);

tourdestination[4] = "hongkong";
console.log(tourdestination);

console.log(tourdestination.length);

tourdestination.pop();

console.log(tourdestination);

tourdestination.shift();

console.log(tourdestination);

tourdestination.push("bangladesh");

console.log(tourdestination);

tourdestination.unshift("japan");

console.log(tourdestination);

