// Week 4

// Question 2
var str = "I'm learning JavaScript in my web development module.";

// Question 3
console.log(str.length);

// Question 4
console.log(str.indexOf("JavaScript"));

// Question 5
var count = 0;
for (let i=0; i < str.length; i++) {
    if (str.charAt(i) == "e") {
        count +=1;
    }
}
console.log(count);

// Question 6
for (var i = 0; i < str.length; i++) {
    console.log(str.indexOf("m", i));
}

// Question 7
let newStr = "";
for (let i = str.length-1; i >= 0; i--) {
    newStr += str.charAt(i);
    // newStr = newStr + str.charAt(i);
}
console.log(newStr);

// Question 8
var url = window.location.href;
if (url.startsWith("http:")) {
    console.log("This page was called up from a non-secure web server!");
} else if (url.startsWith("https:")) {
    console.log("This page was called up from a secure web server!");
} else if (url.startsWith("file:")) {
    console.log("This page was called up from the file system!");
} else {
    console.log("This page was called up from an unknown source!");
}
