import "./Expenses.css";
import Expense from "./Expense";
import ExpenseItem from "./ExpenseItem";
function Expenses({ expenses }: { expenses: Expense[] }): JSX.Element | null {
  return (
    <div className="expenses">
      {expenses.map((expense, i) => (
        <ExpenseItem expense={formatExpenseDate(expense)} />
      ))}
    </div>
  );
}

function formatExpenseDate(expense: Expense) {
  expense.date = new Date(expense.date).toDateString();
  return expense;
}
export default Expenses;
