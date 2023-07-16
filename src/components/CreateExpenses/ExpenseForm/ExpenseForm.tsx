import { useState } from "react";
import userFormInput from "../userFormInput";
import "./ExpenseForm.css";

export default function ExpenseForm() {
    const [userInput, setUserInput] = useState<userFormInput>({enteredTitle: '', enteredAmount: '', enteredDate: ''})

  function titleChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput((prevState) => {return {...prevState, enteredTitle:event.target.value};});
  }

  function amountChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput((prevState) => {return {...prevState, enteredAmount:event.target.value};});
  }

  function dateChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput((prevState) => {return {...prevState, enteredDate:event.target.value};});
  }

  return (
    <form>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Date</label>
          <input
            type="date"
            min={"2017-01-01"}
            max={"2023-12-31"}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
}
