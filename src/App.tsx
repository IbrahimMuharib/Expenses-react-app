import { Expense, RawExpense } from "./components/Expense.ts";
import expensesData from "./components/expensesData.json";
import Expenses from "./components/Expenses.tsx";
function App(): JSX.Element | null {
  let expensesList: Expense[] = parseJsonData(expensesData);
  return (
    <div>
      <div className="text-3xl">
        <h2>Expenses List!</h2>
      </div>
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
