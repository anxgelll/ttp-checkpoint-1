// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


const firstNumber = 100
let secondNumber = 45

console.log(firstNumber)
console.log(secondNumber)

const answer = ((firstNumber + secondNumber - 20) * 2) / 5
console.log(answer)

secondNumber = 50
console.log(secondNumber)

// firstNumber = 200
// This causes an error because a const cannot be reassigned.

// answer: let can be changed later. const cannot be reassigned.

const remainder = 47 % 2
console.log(remainder)

if (remainder === 0) {
  console.log("even")
} else {
  console.log("odd")
}

// answer: The % operator gives the remainder after division.
// Even numbers have a remainder of 0 when divided by 2.
// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim())

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase())

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
console.log(rawInput.toLowerCase().includes("awesome"))

// B5.
// Log the first 10 characters of rawInput.
console.log(rawInput.slice(0, 10))

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
console.log(rawInput.trim().split(" "))
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: It turns a string into an array.
//        I passed a space because spaces separate the words.


// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0], scores[scores.length - 1])


// C2.
// Log the total number of scores we see in the array.
console.log(scores.length)


// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78)
console.log(scores)

// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log(scores.indexOf(95))
// so this will output the index which is 2.
// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
console.log(scores.includes(50))

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
for (let money = 0; money < scores.length; money++) {
  console.log(scores[money])
}

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
scores.forEach(score => console.log(score))
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
// answer: The method forEach is a method thats built in, while the for loop is a general thing thats inside the programming, its used in more general terms
//answer: is one better than the other? I dont think so, its dependant on the context of what you are doing, one might be more efficient than the other in different scenarios

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
console.log(scores.filter(score => score > 80))
// thought I needed a loop but I think this will work regardless

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//


console.log(scores.map(score => score * 2))
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: .map() returns an array of that has the same length as the original, but it has changed into different values. but filter just leaves the area with possibly different length depending on what the filter number or value is




// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name, student["city"])

// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = "B+";
console.log(student);


// D3.
// Use a method to log all of the keys in the object.
console.log(Object.keys(student))

// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student))

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
for (let key in student) {
  console.log(`${key}: ${student[key]}`)
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer: Dot notation uses the property name directly, like student.name.
//          Bracket notation uses a string, like student["name"].
//          Brackets are useful when the property name is stored in a variable.

// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.
console.log(roster[2].name) // it would [2] because index starts at 0 since its an array

roster.forEach(function(person) {
  if (person.present === true) {
    console.log(person.name)
  }
})

const passingStudents = roster.filter(function(person) {
  return person.grade >= 70
})

passingStudents.forEach(function(person) {
  console.log(person.name + ": " + person.grade)
})

const studentNames = roster.map(function(person) {
  return person.name
})
console.log(studentNames)

// answer: An array lets us keep a group of students together.
// Each object keeps one student's information together.
// This is easier than creating separate variables for every value.
// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
function greet(name) {
  return "Hello, " + name + "!"
}
//

console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"


// F2.
// Write a function called square that takes a number and returns its square.
//
function square(number) {
  return number * number
}

console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: return sends a value back from a function.
//          Without return, a function returns undefined.


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
function isEven(number) {
  return number % 2 === 0
}

console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//
function sum(numbers) {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
  }

  return total
}

console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: A callback is a function passed into another function.
//          In the example, function(n) is the callback.


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//
function myMap(array, callback) {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }

  return newArray
}

console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
function myFilter(array, callback) {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      newArray.push(array[i])
    }
  }

  return newArray
}

console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: myMap and myFilter both use callbacks and return new arrays.
//          myMap changes every item. myFilter keeps items that pass a test.
//          They do not change the original array because they make new arrays.
