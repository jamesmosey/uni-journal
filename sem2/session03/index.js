// Week 3

// Question 1/2
console.log(1 == true);
console.log(1 === true);
//Note the difference between using the simple and strict comparison operators == and ===

// Question 3
let x = 3;
let y = 5;
// A 
console.log(x <= y);
console.log(x > 4 && y > 4);
console.log(x > 4 || y > 4);
console.log(!(x > 4 || y > 4));
console.log(x != y && y > 0);
console.log(x * y < 15);
console.log(x * y <= 15);
// B
if (x > y) {
    console.log("X is greater than Y");
}
else {
    console.log("X is less than or equal to Y");
}
// C
if (x > y) {
    console.log(x / y);
}
// D 
while (y < 100) {
    y = y + x;
}
console.log(y);

// Question 4
y = 5;
for (let i=1; i <= y; i++) {
    console.log("Hello " + i);
}

// Question 5
var day = Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
}