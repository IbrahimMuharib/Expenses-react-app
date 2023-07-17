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
  setFilteredYear
}: {
  expenses: Expense[];
  onchangeTitle: Function;
  onFilterExpensesByYear: Function;
  filteredYear: string;
  setFilteredYear:Function
}): JSX.Element | null {
  function saveNewTitle(titleChangeInfo: TitleChangeInfo) {
    onchangeTitle(titleChangeInfo);
  }

  function filterYear(year: string) {
    onFilterExpensesByYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterExpensesByYear={filterYear} filteredYear = {filteredYear} setFilteredYear = {setFilteredYear}/>
      {expenses.map((expense, i) => (
        <ExpenseItem onSaveNewTitle={saveNewTitle} expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
