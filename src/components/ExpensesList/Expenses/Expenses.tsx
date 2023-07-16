import "./Expenses.css";
import { Expense } from "../Expense";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";
function Expenses({ expenses, onchangeTitle }: { expenses: Expense[], onchangeTitle:any }): JSX.Element | null {

  function saveNewTitle(titleInfo:any){
    onchangeTitle(titleInfo)
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
