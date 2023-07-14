import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense.ts";
import expensesData from "./components/expensesData.json";
function App(): JSX.Element | null {
  let expensesList: Expense[] = expensesData;
  return (
    <div>
      <h2>Expenses List!</h2>
      {expensesList.map((expense, i) => (
        <ExpenseItem expense={formatExpenseDate(expense)} />
      ))}
    </div>
  );
}

function formatExpenseDate(expense: Expense) {
  expense.date = new Date(expense.date).toDateString();
  return expense;
}

export default App;
