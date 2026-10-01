const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


// 1. Iterate 0 to 10 using for, while, and do while

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);


// 2. Iterate 10 to 0 using for, while, and do while

// for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while loop
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

// do while loop
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);


// 3. Iterate 0 to n using for loop

let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}


// 4. Print the pattern

for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}


// 5. Print multiplication pattern

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}


// 6. Print i, i^2, and i^3

console.log('i    i^2    i^3');

for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}


// 7. Print even numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 8. Print odd numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// 9. Print prime numbers from 0 to 100

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}


// 10. Sum of all numbers from 0 to 100

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);
// 5050


// 11. Sum of all evens and odds

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log('Even sum:', evenSum);
console.log('Odd sum:', oddSum);
// Even sum: 2550
// Odd sum: 2500


// 12. Sum of evens and odds as an array

evenSum = 0;
oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log([evenSum, oddSum]);
// [2550, 2500]


// 13. Generate an array of 5 random numbers

const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);


// 14. Generate an array of 5 unique random numbers

const uniqueNumbers = [];

while (uniqueNumbers.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100);

  if (!uniqueNumbers.includes(randomNumber)) {
    uniqueNumbers.push(randomNumber);
  }
}

console.log(uniqueNumbers);


// 15. Generate a six-character random ID

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}

console.log(randomId);
// Example: 5j2khz