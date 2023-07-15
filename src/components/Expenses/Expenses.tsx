import "./Expenses.css";
import { Expense } from "../ExpenseItem/Expense";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card";
function Expenses({ expenses }: { expenses: Expense[] }): JSX.Element | null {
  return (
    <Card className="expenses">
      {expenses.map((expense, i) => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
