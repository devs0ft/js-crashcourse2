let a = 5;
let b = 6;

//Operators

//basic Operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

//urinary Operators
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

//Comparison
//let a = 10;
//let b =6;
let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c);

//Control Flow
let score = 80;

if (score >= 80) {
  console.log("You had A");
} else if (score >= 75) {
  console.log("You had B+");
} else if (score >= 70) {
  console.log("You had B");
} else if (score >= 65) {
  console.log("You had C+");
} else if (score >= 60) {
  console.log("You had C");
} else if (score >= 55) {
  console.log("You had D+");
} else if (score >= 50) {
  console.log("You had D");
} else {
  console.log("You had F9");
}

const gender = "Male";
switch (gender) {
  case "Male":
    console.log("Go to the male washrom");
    break;
  case "Female":
    console.log("Go to the female washroom");
    break;
  default:
    console.log("No washroom for You");
    break;
}

//FOR LOOP
for (let i = 5; i < 10; i++) {
  console.log(i);
}

for (let count = 1; count < 10; count++) {
  console.log(count);
}

//WHILE LOOP
let i = 1;
while (i < 10) {
  console.log(i++);
}
