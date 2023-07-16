import "./ExpenseItem.css";
import { Expense } from "../Expense";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";
import { useState } from "react";
function ExpenseItem({ expense }: { expense: Expense }): JSX.Element | null {
  
  const [title, setTitle] = useState(expense.title);
  const clickHandler = () => {
    setTimeout(() => {setTitle('SS')}, 3000)
  setTitle('A')
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">€ {expense.amount}</Card>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
