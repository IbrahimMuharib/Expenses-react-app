import { Expense, RawExpense } from "./components/ExpensesList/Expense.ts";
import expensesData from "./components/expensesData.json";
import Expenses from "./components/ExpensesList/Expenses/Expenses";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/CreateExpenses/NewExpense/NewExpense.tsx";
function App(): JSX.Element | null {
  let expensesList: Expense[] = parseJsonData(expensesData);
  return (
    <div>
      <Card className="expenses_header">
        <NewExpense></NewExpense>
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
