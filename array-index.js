var books = ['physics', 'chemistry', 'math', 'english', 'bangla'];
var mathIndex = books.indexOf('math');
console.log(mathIndex);
console.log(books.indexOf('english'));

// id position found
var studentId = [23, 43, 27, 87, 56, 43, 19];
var idIndex = studentId.indexOf(56);
console.log(idIndex);

// id position not found
var idPosition = studentId.indexOf(156);
console.log(idPosition);



var friendList = ['Farhana', 'Binte', 'Hasan', 'Tasmi'];

// found in array list
var position = friendList[2];
console.log(position);

// not found in array list
var position2 = friendList[9];
console.log(position2);




var studentId = [23, 43, 27, 87, 56, 43, 19];
console.log(studentId);
studentId[2] = 100;
studentId[4] = 200;
console.log(studentId);
console.log(studentId[4]);
