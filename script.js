
// SpendWise Budget Tracker

// Store the monthly budget
let monthlyBudget = 0;

// Array to store multiple expense records
let expenses = [];

// Get HTML elements
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");

const budgetInput = document.getElementById("monthly-budget");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("amount");
const expenseCategory = document.getElementById("category");

const budgetDisplay = document.getElementById("budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const expenseCountDisplay = document.getElementById("expense-count");

const budgetMessage = document.getElementById("budget-message");
const expenseList = document.getElementById("expense-list");

// Format amounts in Kenyan Shillings
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Set the monthly budget
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (newBudget <= 0 || !Number.isFinite(newBudget)) {
        alert("Please enter a valid budget greater than zero.");
        return;
    }

    monthlyBudget = newBudget;

    budgetForm.reset();

    updateDashboard();

    budgetMessage.textContent = "Your monthly budget has been updated.";
});

// Add a new expense
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "" || !category || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid expense name, amount, and category.");
        return;
    }

    // Create an expense object
    const expense = {
        id: Date.now() + Math.random(),
        name: name,
        amount: amount,
        category: category,
        date: new Date().toLocaleDateString("en-CA")
    };

    // Add expense to the array
    expenses.push(expense);

    // Clear the form
    expenseForm.reset();

    // Update the dashboard and expense table
    updateDashboard();
});

// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// Display all expenses using a loop
function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = `
            <tr>
                <td colspan="5">No expenses recorded yet.</td>
            </tr>
        `;
        return;
    }

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);
        row.appendChild(dateCell);
        row.appendChild(actionCell);

        expenseList.appendChild(row);
    }
}

// Delete an expense
function deleteExpense(id) {
    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    updateDashboard();
}

// Update dashboard information
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = monthlyBudget - total;

    budgetDisplay.textContent = formatMoney(monthlyBudget);
    totalExpensesDisplay.textContent = formatMoney(total);
    remainingBalanceDisplay.textContent = formatMoney(remaining);
    expenseCountDisplay.textContent = expenses.length;

    // Conditional statements for budget feedback
    budgetMessage.className = "message";

    if (monthlyBudget === 0) {
        budgetMessage.textContent = "Please set your monthly budget.";
    } else if (remaining < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your monthly budget by " +
            formatMoney(Math.abs(remaining)) + ".";
        budgetMessage.classList.add("danger");
    } else if (remaining === 0) {
        budgetMessage.textContent =
            "You have used your entire monthly budget.";
        budgetMessage.classList.add("warning");
    } else if (total >= monthlyBudget * 0.8) {
        budgetMessage.textContent =
            "Careful! You have used 80% or more of your budget.";
        budgetMessage.classList.add("warning");
    } else {
        budgetMessage.textContent =
            "Good job! You are within your monthly budget.";
    }

    // Refresh the expense table
    displayExpenses();
}

// Display the initial dashboard
updateDashboard();

