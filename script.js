// 1. Type Conversion
const inputNumber = "7500";
console.log(inputNumber + 10);

console.log(inputNumber);
console.log(typeof inputNumber);

console.log(Number(inputNumber));
console.log(typeof Number(inputNumber));

const birthYear = 1999;
console.log(String(birthYear));

const firstName = "Ritom";
console.log(Number(firstName));

const firstNumber = "7500";
const nameInput = "Ritom";
console.log(Boolean(firstNumber));
console.log(Boolean(nameInput));

// 2. Type Coercion
let bookNumber = 5;

console.log("I Have " + bookNumber + " Story Book");
console.log("30" + 5);
console.log("30" - 5);
console.log("30" - "5");
console.log("30" * 5);
console.log("30" / 5);
console.log("30" ** 5);
console.log("30" % 5);

console.log("100" - 5 + 10);
console.log("100" - "50" + 10);
console.log("100" - 4 - 3 + 2 + "10");

// 3. JavaScript Truthy & Falsy

// 0
// ""
// null
// undefined
// NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean("Ritom"));
console.log(Boolean(774));

let job = "";
if (job) {
  console.log("I Have A Good Job");
} else {
  console.log("Looking For A Good Job");
}

let salary = 30000;
if (salary) {
  console.log("My Salary Is Set");
} else {
  console.log("My Salary Isn't Set");
}

// 4. Conditional Statement

let earning = 15000;
if (earning >= 30000) {
  console.log("His Earning Is Too Good");
} else if (earning > 15000) {
  console.log("His Earning Is Good");
} else if (earning > 10000) {
  console.log("His Earning Isn't Bad");
} else {
  console.log("His Earning Isn't Good Enough");
}

let day = "Monday";

if (day === "Saturday") {
  console.log("Today Is Our Main Live Class");
} else if (day === "Sunday") {
  console.log("Today Is Our Support Class");
} else if (day === "Monday") {
  console.log("Today Is Our Main Live Class");
} else if (day === "Tuesday") {
  console.log("Today Is Our Support Class");
} else if (day === "Wednesday") {
  console.log("Today Is Our Main Live Class");
} else if (day === "Thrusday") {
  console.log("Today Is Our Support Class");
} else {
  console.log("Today Is Our Holiday");
}

// 5. Nested Conditional Statement

let x = 10;
if (x >= 10) {
  if (x == 10) {
    console.log(`${x} is equal to 10`);
  } else {
    console.log(`${x} is greater than 10`);
  }
} else {
  console.log(`${x} is less than 10`);
}

// 6. Switch Statement

let today = "Tuesday";

switch (today) {
  case "Saturday":
    console.log("Today Is Our Main Live Class");
    break;
  case "Sunday":
    console.log("Today Is Our Support Class");
    break;
  case "Monday":
    console.log("Today Is Our Main Live Class");
    break;
  case "Tuesday":
    console.log("Today Is Our Support Class");
    break;
  case "Wednesday":
    console.log("Today Is Our Main Live Class");
    break;
  case "Thrusday":
    console.log("Today Is Our Support Class");
    break;
  default:
    console.log("Today Is Our Holiday");
}
