// Week 5

// Question 2 
var friends = ["John", "Paul", "Wilson", "Craig"];
// A
friends.push("Isabella", "Charlotte");
// B
friends[friends.length-1] = "Miles";
// C
friends.splice(1, 2, "Aria")
// D
friends.unshift(friends.pop());
// E
friends.push(friends.shift())
// F
console.log(friends.indexOf("Aria"));
// G
if (friends.includes("Bob")) {
    console.log(true);
} else {
    console.log(false);
}
// H
console.log(friends.sort());
// I
let strFriends = friends.join(", ")
console.log(strFriends);

// Question 3
var count = 0;
for (let i = 0; i < friends.length; i++) {
    count += friends[i].length
}
let countAvg = count / friends.length;
console.log(count);
console.log(countAvg);