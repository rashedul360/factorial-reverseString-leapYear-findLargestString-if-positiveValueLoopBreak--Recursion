// take out Factorial
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(7));
// factorial

function factorial1(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial1(7));
// string reverse
function recursiveStr(str) {
  let unique = "";
  for (element of str) {
    unique = element + unique;
  }
  return unique;
}
console.log(recursiveStr("rashedul"));
// string reverse
function reverseString(str) {
  // use  empty string to store reversed string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("islam"));

// Take out the fibonacci series
function fibonacci(num) {
  let fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fibonacci(10));
// take out the leap year
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(leapYear(2021));

// find a largest name from an array
function bestFriend(names) {
  let name = [0];
  for (const element of names) {
    if (element.length > name.length) {
      name = element;
    }
  }
  return name;
}
let names = ["rashedul islam shihab", "rashedul", "taki", "rashedul islam"];
console.log(bestFriend(names));

// if array have a positive number the loop will stopped yeat.
function onlyPositive(array) {
  let arr = [];
  for (const element of array) {
    if (element < 0) {
      console.log("here is positive number");
      break;
    }
    arr.push(element);
  }
  return arr;
}
const result = [1, 2, 3, 4, -1, -2, 5, 6];
console.log(onlyPositive(result));
