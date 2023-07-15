import { Expense, RawExpense } from "./components/ExpenseItem/Expense.ts";
import expensesData from "./components/expensesData.json";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import Card from "./components/Card";
function App(): JSX.Element | null {
  let expensesList: Expense[] = parseJsonData(expensesData);
  return (
    <div>
      <Card className="expenses_header">
        <h1>Expenses List!</h1>
      </Card>
      <Expenses expenses={expensesList} />
    </div>
  );
}

function parseJsonData(expensesData: RawExpense[]): Expense[] {
  let expenses: Expense[] = expensesData.map(
    (expense: RawExpense, i: number) => ({
      ...expense,
      date: new Date(expense.date),
    })
  );
  return expenses;
}
export default App;
