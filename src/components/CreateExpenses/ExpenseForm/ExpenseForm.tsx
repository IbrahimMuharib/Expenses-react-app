import { useState } from "react";
import "./ExpenseForm.css";
import {RawExpense } from "../../ExpensesList/Expense";

export default function ExpenseForm({onSaveExpenseDate, hideForm}:{onSaveExpenseDate:Function, hideForm:any}) {
  const [userInput, setUserInput] = useState<RawExpense>({
    id:"-1",
    title: "",
    amount: "",
    date: "",
  });

  function inputChangeHandler(identifier: string, value: string) {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (userInput.date === '' || userInput.amount === ''){
      return
    }

    onSaveExpenseDate(userInput)
    clearUserInput()
  }

  function clearUserInput(){
    setUserInput({id:"-1", title:"", amount:"", date:""});

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Date</label>
          <input
            type="date"
            min={"2017-01-01"}
            max={"2023-12-31"}
            value={userInput.date}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
        <button onClick = {hideForm}> Cancel </button>
      </div>
    </form>
  );
}
