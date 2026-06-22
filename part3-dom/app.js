// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

const mainHeading = document.getElementById("main-heading")
const subtitle = document.getElementById("subtitle")
const itemList = document.getElementById("item-list")

console.log(mainHeading)
console.log(subtitle)
console.log(itemList)

const secondHeading = document.querySelector("h2")
const toggleButton = document.querySelector("#toggle-btn")
const firstListItem = document.querySelector(".list-item")

console.log(secondHeading)
console.log(toggleButton)
console.log(firstListItem)

const allListItems = document.querySelectorAll(".list-item")
console.log(allListItems)

allListItems.forEach(function(item) {
  console.log(item.textContent)
})

// answer: getElementById finds an element using its id.
// querySelector uses any CSS selector and returns the first match.
// querySelectorAll returns a NodeList containing all matches.
// A NodeList looks like an array, but it does not have every array method.

// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

console.log(mainHeading.textContent)

subtitle.textContent = "Page loaded successfully."

const outputText = document.getElementById("output-text")
outputText.textContent = "JavaScript changed this text."

const outputBox = document.getElementById("output-box")
outputBox.style.backgroundColor = "lightblue"

// answer: textContent reads or changes an element's text.
// innerHTML reads or changes HTML tags inside an element.
// innerHTML can be risky when it uses untrusted user input.

// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

const changeButton = document.getElementById("change-btn")

changeButton.addEventListener("click", function() {
  mainHeading.textContent = "The Heading Changed!"
})

toggleButton.addEventListener("click", function() {
  outputText.classList.toggle("highlighted")
})

mainHeading.classList.add("active")
console.log(mainHeading.classList)

firstListItem.classList.remove("list-item")
console.log(firstListItem.classList)

// answer: An event listener waits for an event, such as a click.
// The code belongs inside a function so it runs when the click happens.

// answer: toggle adds a class when it is missing and removes it when it exists.
// add adds a class. remove removes a class.
// className replaces the entire class value, which can remove other classes.
// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

const newItem = document.createElement("li")
newItem.textContent = "Oranges"
newItem.classList.add("list-item")
itemList.appendChild(newItem)

const addButton = document.getElementById("add-btn")
const itemInput = document.getElementById("item-input")

addButton.addEventListener("click", function() {
  const itemText = itemInput.value

  const addedItem = document.createElement("li")
  addedItem.textContent = itemText
  addedItem.classList.add("list-item")

  itemList.appendChild(addedItem)
  itemInput.value = ""
})

outputText.remove()

// answer: createElement creates a new HTML element.
// appendChild places it inside another element.
// remove deletes an element from the page.
// The new element appears when appendChild adds it to the page.
