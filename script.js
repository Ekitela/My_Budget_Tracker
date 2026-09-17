// SpendWise JavaScript Foundation

// Application data
let monthlyBudget = 30000;
let foodExpenses = 8500;
let transportExpenses = 4200;
let rentExpenses = 12000;
let entertainmentExpenses = 2500;
let savingsAmount = 6000;
let utilitiesExpenses = 3800;

// Calculate total expenses
function calculateTotalExpenses() {
return (
foodExpenses +
transportExpenses +
rentExpenses +
entertainmentExpenses +
utilitiesExpenses
);
}

// Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
return budget - expenses;
}

// Collect budget information from the user
let userBudget = prompt("Enter your monthly budget:", monthlyBudget);

// Convert user input from text to a number
userBudget = Number(userBudget);

// Calculate budget information
let totalExpenses = calculateTotalExpenses();
let remainingBalance = calculateRemainingBalance(userBudget, totalExpenses);

// Display results in the browser console
console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KSh " + userBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Savings: KSh " + savingsAmount);
console.log("Remaining Balance: KSh " + remainingBalance);

if (remainingBalance >= 0) {
console.log("Status: You are within your budget.");
} else {
console.log("Status: You have exceeded your budget.");
}
