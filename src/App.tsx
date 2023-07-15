import Expense from "./components/Expense.ts";
import expensesData from "./components/expensesData.json";
import Expenses from "./components/Expenses.tsx";
function App(): JSX.Element | null {
  let expensesList: Expense[] = expensesData;
  return (
    <div>
      <h2>Expenses List!</h2>
      <Expenses expenses={expensesList} />
    </div>
  );
}

export default App;
