
// ======================================
// SPENDWISE - BUDGET TRACKER
// Notifications and Savings Tracker
// ======================================

// 1. ARRAYS AND VARIABLES

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let budget = Number(localStorage.getItem("budget")) || 0;

let savings = JSON.parse(localStorage.getItem("savings")) || [];
let savingsGoal = Number(localStorage.getItem("savingsGoal")) || 0;

// 2. SELECT HTML ELEMENTS

const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");
const savingsGoalForm = document.getElementById("savingsGoalForm");
const savingsForm = document.getElementById("savingsForm");

const budgetInput = document.getElementById("budgetInput");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const savingsGoalInput = document.getElementById("savingsGoalInput");
const savingsAmount = document.getElementById("savingsAmount");

const totalBudget = document.getElementById("totalBudget");
const totalExpenses = document.getElementById("totalExpenses");
const remainingBalance = document.getElementById("remainingBalance");

const totalSaved = document.getElementById("totalSaved");
const savingsTarget = document.getElementById("savingsTarget");
const savingsRemaining = document.getElementById("savingsRemaining");

const expenseList = document.getElementById("expenseList");
const budgetMessage = document.getElementById("budgetMessage");
const savingsMessage = document.getElementById("savingsMessage");

const progressBar = document.getElementById("progressBar");
const savingsProgressBar = document.getElementById("savingsProgressBar");

const notificationArea = document.getElementById("notificationArea");
const clearExpensesButton = document.getElementById("clearExpenses");

// 3. FORMAT CURRENCY

function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 4. NOTIFICATION SYSTEM

let notificationTimer;

function showNotification(message, type = "info") {

    notificationArea.textContent = message;

    notificationArea.className = "notification-area notification-" + type;

    notificationArea.hidden = false;

    clearTimeout(notificationTimer);

    notificationTimer = setTimeout(function () {
        notificationArea.hidden = true;
    }, 5000);
}

// 5. SAVE DATA

function saveData() {

    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", budget);

    localStorage.setItem("savings", JSON.stringify(savings));
    localStorage.setItem("savingsGoal", savingsGoal);
}

// 6. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 7. CALCULATE TOTAL SAVINGS

function calculateTotalSavings() {

    let total = 0;

    for (let i = 0; i < savings.length; i++) {
        total += savings[i].amount;
    }

    return total;
}

// 8. UPDATE BUDGET DASHBOARD

function updateDashboard() {

    const total = calculateTotalExpenses();
    const balance = budget - total;

    totalBudget.textContent = formatCurrency(budget);
    totalExpenses.textContent = formatCurrency(total);
    remainingBalance.textContent = formatCurrency(balance);

    const percentage = budget > 0 ? (total / budget) * 100 : 0;

    progressBar.style.width = Math.min(percentage, 100) + "%";

    budgetMessage.className = "";

    if (budget <= 0) {

        budgetMessage.textContent =
            "Please set a budget to start tracking your expenses.";

        budgetMessage.classList.add("warning");
        progressBar.style.backgroundColor = "#d97706";

    } else if (total > budget) {

        budgetMessage.textContent =
            "You have exceeded your budget by " +
            formatCurrency(total - budget);

        budgetMessage.classList.add("danger");
        progressBar.style.backgroundColor = "#dc2626";

    } else if (total === budget) {

        budgetMessage.textContent =
            "You have used your entire budget. Be careful!";

        budgetMessage.classList.add("warning");
        progressBar.style.backgroundColor = "#d97706";

    } else if (percentage >= 80) {

        budgetMessage.textContent =
            "Caution! You have used " +
            percentage.toFixed(1) +
            "% of your budget.";

        budgetMessage.classList.add("warning");
        progressBar.style.backgroundColor = "#d97706";

    } else {

        budgetMessage.textContent =
            "Great job! You are managing your budget well.";

        budgetMessage.classList.add("success");
        progressBar.style.backgroundColor = "#239b78";
    }
}

// 9. UPDATE SAVINGS DASHBOARD

function updateSavingsDashboard() {

    const saved = calculateTotalSavings();
    const remaining = Math.max(savingsGoal - saved, 0);

    const percentage = savingsGoal > 0
        ? (saved / savingsGoal) * 100
        : 0;

    totalSaved.textContent = formatCurrency(saved);
    savingsTarget.textContent = formatCurrency(savingsGoal);
    savingsRemaining.textContent = formatCurrency(remaining);

    savingsProgressBar.style.width =
        Math.min(percentage, 100) + "%";

    savingsMessage.className = "";

    if (savingsGoal <= 0) {

        savingsMessage.textContent =
            "Set a savings goal to get started.";

        savingsMessage.classList.add("warning");

    } else if (saved >= savingsGoal) {

        savingsMessage.textContent =
            "Congratulations! You have reached your savings goal!";

        savingsMessage.classList.add("success");

    } else {

        savingsMessage.textContent =
            "You have achieved " + percentage.toFixed(1) +
            "% of your savings goal.";

        savingsMessage.classList.add("success");
    }
}

// 10. DISPLAY EXPENSES

function displayExpenses() {

    expenseList.innerHTML = "";

    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses recorded yet.</p>';

        return;
    }

    expenses.forEach(function (expense) {

        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        const expenseDetails = document.createElement("div");
        expenseDetails.className = "expense-details";

        const name = document.createElement("h3");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent = expense.category;

        const date = document.createElement("p");
        date.textContent = expense.date;

        expenseDetails.appendChild(name);
        expenseDetails.appendChild(category);
        expenseDetails.appendChild(date);

        const actions = document.createElement("div");
        actions.className = "expense-actions";

        const amount = document.createElement("span");
        amount.className = "expense-amount";
        amount.textContent = formatCurrency(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function () {
            deleteExpense(expense.id);
        });

        actions.appendChild(amount);
        actions.appendChild(deleteButton);

        expenseItem.appendChild(expenseDetails);
        expenseItem.appendChild(actions);

        expenseList.appendChild(expenseItem);
    });
}

// 11. ADD NEW EXPENSE

expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (!name || !Number.isFinite(amount) || amount <= 0 || !category) {

        showNotification("Please enter valid expense details.", "danger");
        return;
    }

    const newExpense = {

        id: Date.now() + "-" + Math.random().toString(36).slice(2),

        name: name,
        amount: amount,
        category: category,

        date: new Date().toLocaleDateString("en-KE")
    };

    expenses.push(newExpense);

    saveData();

    displayExpenses();
    updateDashboard();

    expenseForm.reset();

    showNotification("Expense added successfully!", "success");

    if (budget > 0) {

        const percentage =
            (calculateTotalExpenses() / budget) * 100;

        if (percentage > 100) {

            showNotification(
                "Warning! You have exceeded your budget.",
                "danger"
            );

        } else if (percentage >= 80) {

            showNotification(
                "Budget alert! You have used at least 80% of your budget.",
                "warning"
            );
        }
    }
});

// 12. SET MONTHLY BUDGET

budgetForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {

        showNotification("Enter a valid budget greater than zero.", "danger");
        return;
    }

    budget = newBudget;

    saveData();

    updateDashboard();

    budgetForm.reset();

    showNotification("Monthly budget saved successfully!", "success");

});

// 13. SET SAVINGS GOAL

savingsGoalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const newGoal = Number(savingsGoalInput.value);

    if (!Number.isFinite(newGoal) || newGoal <= 0) {

        showNotification(
            "Please enter a valid savings target.",
            "danger"
        );

        return;
    }

    savingsGoal = newGoal;

    saveData();

    updateSavingsDashboard();

    savingsGoalForm.reset();

    showNotification("Savings goal set successfully!", "success");

});

// 14. ADD SAVINGS CONTRIBUTION

savingsForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const amount = Number(savingsAmount.value);

    if (!Number.isFinite(amount) || amount <= 0) {

        showNotification(
            "Please enter a valid savings amount.",
            "danger"
        );

        return;
    }

    const contribution = {

        id: Date.now() + "-" + Math.random().toString(36).slice(2),

        amount: amount,

        date: new Date().toLocaleDateString("en-KE")
    };

    savings.push(contribution);

    saveData();

    updateSavingsDashboard();

    savingsForm.reset();

    if (savingsGoal > 0 &&
        calculateTotalSavings() >= savingsGoal) {

        showNotification(
            "Congratulations! You reached your savings goal!",
            "success"
        );

    } else {

        showNotification(
            "Savings contribution added successfully!",
            "success"
        );
    }
});

// 15. DELETE INDIVIDUAL EXPENSE

function deleteExpense(id) {

    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    saveData();

    displayExpenses();
    updateDashboard();

    showNotification("Expense deleted successfully.", "info");
}

// 16. CLEAR ALL EXPENSES

clearExpensesButton.addEventListener("click", function () {

    if (expenses.length === 0) {

        showNotification("There are no expenses to clear.", "warning");
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to delete all expenses?"
    );

    if (confirmClear) {

        expenses = [];

        saveData();

        displayExpenses();
        updateDashboard();

        showNotification("All expenses cleared successfully.", "info");
    }
});

// 17. INITIALIZE APPLICATION

function initializeApp() {

    budgetInput.value = budget > 0 ? budget : "";

    savingsGoalInput.value =
        savingsGoal > 0 ? savingsGoal : "";

    displayExpenses();

    updateDashboard();

    updateSavingsDashboard();
}

// START APPLICATION

initializeApp();

