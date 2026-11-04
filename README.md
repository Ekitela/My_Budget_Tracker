
# SpendWise – Interactive Budget Tracker

## Project Description

SpendWise is a simple, interactive web application that helps users manage their monthly budgets and track expenses. Users can set a monthly budget, add expenses, view their spending summary, and delete recorded expenses.

This week's work focused on making the application interactive using JavaScript, HTML, and CSS.

## Features and Improvements

- Set and update a monthly budget.
- Add expenses with a name, amount, category, and date.
- View total expenses and remaining balance.
- Display the number of recorded expenses.
- Delete expenses when they are no longer needed.
- Receive warnings when spending approaches or exceeds the budget.
- Responsive layout for smaller screens.
- Display financial amounts in Kenyan Shillings (KSh).

## Project Files

### index.html

Provides the structure of the application, including the budget form, expense form, dashboard summary, and expense table.

### style.css

Controls the appearance of the application. It includes the green color theme, styled forms and buttons, dashboard cards, table styling, and responsive design.

### script.js

Adds the interactive functionality using JavaScript. It handles budget calculations, expense records, validation, deletion, and dashboard updates.

### README.md

Provides information about the project, its features, technologies, and how JavaScript concepts are used.

## How JavaScript Concepts Are Used

### 1. Conditionals

Conditional statements (`if`, `else if`, and `else`) validate user input and determine the budget status.

For example:
- If the budget is zero, the application asks the user to set a budget.
- If expenses exceed the budget, a warning is displayed.
- If 80% or more of the budget has been used, a caution message appears.
- Otherwise, the application displays a message confirming that spending is within budget.

### 2. Arrays

An array named `expenses` stores multiple expense records.

Each expense contains:
- A unique ID
- Expense name
- Amount
- Category
- Date

The `push()` method adds new expenses, while `filter()` removes deleted expenses.

### 3. Loops

`for` loops process the expense array to calculate total spending and display all recorded expenses.

### 4. DOM Manipulation

JavaScript uses DOM methods such as `getElementById()`, `createElement()`, and `textContent` to update the dashboard and expense table without reloading the page.

### 5. Event Listeners

Event listeners respond to user actions, including submitting the budget form, adding expenses, and clicking delete buttons.

### 6. Dashboard Updates

The `updateDashboard()` function recalculates the total expenses, remaining balance, expense count, and budget status whenever the budget or expense records change.

## Testing

The application was tested in a web browser by:
- Setting a monthly budget.
- Adding multiple expenses.
- Checking the total expenses and remaining balance.
- Deleting an expense and checking the updated figures.
- Adding expenses that exceed the budget to test warning messages.

## Challenges and Solutions

One challenge was connecting JavaScript to the HTML forms and dashboard elements. This was resolved by using DOM selection methods and event listeners.

Another challenge was ensuring that the dashboard updates whenever expenses are added or deleted. This was solved by creating a reusable `updateDashboard()` function.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub

## Learning Outcomes

Through this project, I improved my understanding of JavaScript conditionals, arrays, loops, DOM manipulation, and event listeners. I also learned how to connect user interactions with application logic to create a functional budget tracker.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Set a monthly budget and start recording expenses.

