import "./Expenses.css";
import { Expense, TitleChangeInfo } from "../Expense";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";
function Expenses({ expenses, onchangeTitle }: { expenses: Expense[], onchangeTitle:Function }): JSX.Element | null {

  function saveNewTitle(titleChangeInfo:TitleChangeInfo){
    onchangeTitle(titleChangeInfo)
  }
  return (
    <Card className="expenses">
      {expenses.map((expense, i) => (
        <ExpenseItem onSaveNewTitle = {saveNewTitle} expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
