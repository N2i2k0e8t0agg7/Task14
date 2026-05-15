// JavaScript Number Operations Assignment
// This program performs multiple operations on a number.

// Variables
let currentNumber = 153;
let tableNumber = 5;
let sumLimit = 10;

// 1. Sum of First n Numbers
function findSumOfNumbers(n) {
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += i;
    }
    console.log(`Sum of first ${n} numbers: ${totalSum}`);
}

// 2. Print Table of a Number
function printTable(number) {
    console.log(`Multiplication Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// 3. Prime Number Check
function checkPrimeNumber(number) {
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(`Is ${number} a prime number? Yes`);
    } else {
        console.log(`Is ${number} a prime number? No`);
    }
}

// 4. Print All Factors
function printFactors(number) {
    let factorList = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factorList.push(i);
        }
    }
    console.log(`Factors of ${number}: ${factorList.join(", ")}`);
}

// 5. Sum of Digits
function findDigitSum(number) {
    let digitSum = 0;
    let tempNumber = number;
    while (tempNumber > 0) {
        let digit = tempNumber % 10;
        digitSum += digit;
        tempNumber = Math.floor(tempNumber / 10);
    }
    console.log(`Sum of digits of ${number}: ${digitSum}`);
}

// 6. Armstrong Number Check
function checkArmstrongNumber(number) {
    let tempNumber = number;
    let armstrongSum = 0;
    while (tempNumber > 0) {
        let digit = tempNumber % 10;
        armstrongSum += digit ** 3;
        tempNumber = Math.floor(tempNumber / 10);
    }
    if (armstrongSum === number) {
        console.log(`Is ${number} an Armstrong number? Yes`);
    } else {
        console.log(`Is ${number} an Armstrong number? No`);
    }
}

// Output Section
console.log("-----------------------------------");
console.log(`Example Number: ${currentNumber}`);
console.log("-----------------------------------");
findSumOfNumbers(sumLimit);
console.log("-----------------------------------");
printTable(tableNumber);
console.log("-----------------------------------");
checkPrimeNumber(currentNumber);
console.log("-----------------------------------");
printFactors(currentNumber);
console.log("-----------------------------------");
findDigitSum(currentNumber);
console.log("-----------------------------------");
checkArmstrongNumber(currentNumber);
console.log("-----------------------------------");