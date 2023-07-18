import "./ExpenseItem.css";
import { Expense, TitleChangeInfo } from "../Expense";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";
import { useState } from "react";
import React, { KeyboardEvent } from "react";

function ExpenseItem({
  expense,
  onSaveNewTitle,
}: {
  expense: Expense;
  onSaveNewTitle: Function;
}): JSX.Element | null {
  const [title, setTitle] = useState(expense.title);
  const [titleChangeInfo, setTitleChangeInfo] = useState<TitleChangeInfo>({
    enteredTitle: "",
    id: expense.id,
  });

  let enteredTitleRef = React.createRef();

  const clickHandler = () => {
    setTitle(titleChangeInfo.enteredTitle);
    onSaveNewTitle(titleChangeInfo);
    setTitleChangeInfo((prevInfo) => {
      return { ...prevInfo, enteredTitle: "" };
    });
  };

  const changeHandler = (value: string, id: string) => {
    setTitleChangeInfo({ enteredTitle: value, id: id });
  };

  const handleKeypress = (event: KeyboardEvent<HTMLInputElement>) => {
    //it triggers by pressing the enter key
    if (!event.repeat && event.key === "Enter") {
      clickHandler();
      event.currentTarget.blur();
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">€ {expense.amount}</Card>
      </div>
      <button onClick={clickHandler}> Change Title </button>
      <input
        type="text"
        value={titleChangeInfo.enteredTitle}
        onChange={(event) => {
          changeHandler(event.target.value, expense.id);
        }}
        onKeyUp={handleKeypress}
      ></input>
    </Card>
  );
}

export default ExpenseItem;
