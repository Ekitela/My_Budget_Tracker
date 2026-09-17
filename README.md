# SpendWise Budget Tracker

## Project Description

SpendWise is an interactive budgeting application that helps users manage their monthly budget and track their expenses.

This week's improvements added JavaScript decision making, arrays, loops, DOM manipulation, and event handling. Users can now set a budget and add expenses directly through the webpage.

## Improvements Made This Week

The following interactive features were added:

- Users can set their monthly budget.
- Users can add new expense records.
- Expenses are stored in an array.
- Expense records are processed using loops.
- Budget totals are calculated automatically.
- The remaining balance is updated dynamically.
- The application provides feedback based on the user's budget.
- Expense records are displayed directly on the webpage.

## Conditional Statements

Conditional statements are used to evaluate the user's remaining budget.

The application checks whether:

- The user has exceeded the budget.
- The user has used the entire budget.
- The remaining balance is getting low.
- The user is still within the budget.

This allows SpendWise to provide appropriate feedback based on the user's financial data.

## Arrays

An array named `expenses` stores multiple expense records.

Each expense contains:

- Expense name
- Amount
- Category

New expenses are added to the array using the `push()` method.

This makes it easier to manage multiple expense records instead of storing each expense in a separate variable.

## Loops

A `for...of` loop is used to process the expense records stored in the `expenses` array.

The loop is used to:

- Calculate the total expenses.
- Display each expense record on the webpage.

This allows the application to process any number of expense records efficiently.

## DOM Manipulation

SpendWise uses DOM manipulation to update the webpage dynamically.

JavaScript updates elements such as:

- Monthly budget
- Total expenses
- Remaining balance
- Budget feedback
- Expense records

Methods such as `getElementById()`, `textContent`, `createElement()`, and `appendChild()` are used to update the page.

## Event Handling

Event listeners allow the application to respond to user actions.

SpendWise uses `addEventListener()` to handle form submissions.

When a user:

1. Sets a monthly budget.
2. Adds an expense.

JavaScript processes the input, updates the application data, recalculates the budget, and updates the webpage.

## Challenges and Solutions

One challenge was making sure JavaScript updated the webpage instead of displaying information only in the browser console.

This was resolved by using DOM manipulation to update specific HTML elements with calculated budget information.

Another challenge was managing multiple expenses efficiently. This was resolved by storing expense records in an array and using loops to process and display them.

## Project Files

### index.html

Contains the structure of the SpendWise application, including the budget form, expense form, summary cards, and expense records section.

### style.css

Contains the visual styling, responsive layout, CSS Grid, Flexbox, form styling, and interactive effects.

### script.js

Contains the application's interactive JavaScript functionality, including variables, arrays, loops, conditional statements, functions, DOM manipulation, and event listeners.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JavaScript Arrays
- JavaScript Loops
- Conditional Statements
- Event Listeners
- CSS Grid
- CSS Flexbox
- Responsive Design
- GitHub

## Learning Outcome

Through this assignment, I learned how to use JavaScript to make a webpage interactive. I practiced working with arrays and loops, making decisions with conditional statements, updating webpage content using the DOM, and responding to user actions with event listeners.