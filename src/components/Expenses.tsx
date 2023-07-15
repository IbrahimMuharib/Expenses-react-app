import "./Expenses.css";
import { Expense } from "./Expense";
import ExpenseItem from "./ExpenseItem";
function Expenses({ expenses }: { expenses: Expense[] }): JSX.Element | null {
  return (
    <div className="expenses">
      {expenses.map((expense, i) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}

export default Expenses;
