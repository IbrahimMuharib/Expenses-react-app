import "./Expenses.css";
import { Expense, TitleChangeInfo } from "../Expense";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "../../ExpensesFilter/ExpensesFilter";
function Expenses({
  expenses,
  onchangeTitle,
  onFilterExpensesByYear,
  filteredYear,
}: {
  expenses: Expense[];
  onchangeTitle: Function;
  onFilterExpensesByYear: Function;
  filteredYear: string;
}): JSX.Element | null {
  function saveNewTitle(titleChangeInfo: TitleChangeInfo) {
    onchangeTitle(titleChangeInfo);
  }

  function filterYear(year: string) {
    onFilterExpensesByYear(year);
  }

  let expensesContent:any = <p>No expenses found.</p>

  if (expenses.length > 0){
    expensesContent = expenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        onSaveNewTitle={saveNewTitle}
        expense={expense}
      />
    ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterExpensesByYear={filterYear}
        filteredYear={filteredYear}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
