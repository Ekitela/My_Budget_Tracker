// SpendWise Interactive Budget Tracker

// Store application data
let monthlyBudget = 30000;

let expenses = [
    {
        name: "Groceries",
        amount: 8500,
        category: "Food"
    },
    {
        name: "Bus and fuel",
        amount: 4200,
        category: "Transport"
    },
    {
        name: "House rent",
        amount: 12000,
        category: "Rent"
    },
    {
        name: "Entertainment",
        amount: 2500,
        category: "Entertainment"
    },
    {
        name: "Electricity and water",
        amount: 3800,
        category: "Utilities"
    }
];

// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Calculate remaining balance
function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses();
}

// Update the dashboard using DOM manipulation
function updateDashboard() {
    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = calculateRemainingBalance();

    document.getElementById("budget-display").textContent =
        "KSh " + monthlyBudget.toLocaleString();

    document.getElementById("expenses-display").textContent =
        "KSh " + totalExpenses.toLocaleString();

    document.getElementById("balance-display").textContent =
        "KSh " + remainingBalance.toLocaleString();

    // Use conditionals to provide budget feedback
    let message = document.getElementById("budget-message");

    if (remainingBalance < 0) {
        message.textContent = "Warning: You have exceeded your budget.";
    } else if (remainingBalance === 0) {
        message.textContent = "You have used your entire budget.";
    } else if (remainingBalance <= monthlyBudget * 0.2) {
        message.textContent = "Be careful: your remaining balance is getting low.";
    } else {
        message.textContent = "Good job! You are within your budget.";
    }

    displayExpenses();
}

// Display expense records using a loop
function displayExpenses() {
    let expenseList = document.getElementById("expense-list");

    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = "<p>No expenses added yet.</p>";
        return;
    }

    for (let expense of expenses) {
        let expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <strong>${expense.name}</strong>
            <span>${expense.category}</span>
            <span>KSh ${expense.amount.toLocaleString()}</span>
        `;

        expenseList.appendChild(expenseItem);
    }
}

// Handle budget form submission
document.getElementById("budget-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let budgetInput = document.getElementById("budget-input");
    let newBudget = Number(budgetInput.value);

    if (newBudget > 0) {
        monthlyBudget = newBudget;
        budgetInput.value = "";
        updateDashboard();
    }
});

// Handle expense form submission
document.getElementById("expense-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("expense-name");
    let amountInput = document.getElementById("expense-amount");
    let categoryInput = document.getElementById("expense-category");

    let expenseName = nameInput.value.trim();
    let expenseAmount = Number(amountInput.value);
    let expenseCategory = categoryInput.value;

    if (expenseName !== "" && expenseAmount > 0 && expenseCategory !== "") {
        expenses.push({
            name: expenseName,
            amount: expenseAmount,
            category: expenseCategory
        });

        nameInput.value = "";
        amountInput.value = "";
        categoryInput.value = "";

        updateDashboard();
    }
});

// Display the initial dashboard
updateDashboard();