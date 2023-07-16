import "./ExpenseItem.css";
import { Expense} from "../Expense";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";
import { useState } from "react";
function ExpenseItem({ expense, onSaveNewTitle }: { expense: Expense, onSaveNewTitle:any }): JSX.Element | null {
  
  const [title, setTitle] = useState(expense.title);
  const [titleInfo, setTitleInfo] = useState({enteredTitle:"", id:expense.id});
  const clickHandler = () => {
    setTitle(titleInfo.enteredTitle)
    onSaveNewTitle(titleInfo)
  }

  const changeHandler = (value:string, id:string) => {
    setTitleInfo({enteredTitle:value, id:id})
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">€ {expense.amount}</Card>
      </div>
      <button onClick={clickHandler}> Change Title </button>
      <input type="text" onChange={(event)=>{changeHandler(event.target.value, expense.id)}}></input>
    </Card>
  );
}

export default ExpenseItem;
