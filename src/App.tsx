import {
  Expense,
  RawExpense,
  TitleChangeInfo,
} from "./components/ExpensesList/Expense.ts";
import Expenses from "./components/ExpensesList/Expenses/Expenses";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/CreateExpenses/NewExpense/NewExpense.tsx";
import { parseJsonData, getLocalStorageData } from "./utils/parser.tsx";
import { useState } from "react";
import ChartBar from "./components/Chart/ChartBar.tsx";
import ExpensesChart from "./components/Chart/ExpensesChart.tsx";

function App(): JSX.Element | null {
  //TODO move to data layer
  function addExpenseHandler(rawExpense: RawExpense) {
    let rawExpensesList: RawExpense[] = getLocalStorageData();
    rawExpensesList.push(rawExpense);
    localStorage.setItem("Expenses", JSON.stringify(rawExpensesList));
    const newExpensesList: Expense[] = parseJsonData(rawExpensesList);
    setExpensesList(newExpensesList);
    setFilteredYear("All");
  }
  //TODO move to data layer
  function changeTitleHandler(titleChangeInfo: TitleChangeInfo) {
    let rawExpensesList: RawExpense[] = getLocalStorageData();
    const findIndex = rawExpensesList.find((rawExpense) => {
      return rawExpense.id === titleChangeInfo.id;
    });
    if (findIndex !== undefined) {
      findIndex.title = titleChangeInfo.enteredTitle;
    }
    localStorage.setItem("Expenses", JSON.stringify(rawExpensesList));
    const newExpensesList: Expense[] = parseJsonData(rawExpensesList);
    setExpensesList(newExpensesList);
  }
  //TODO move to data layer?
  function filterYear(year: string) {
    let rawExpensesList: RawExpense[] = getLocalStorageData()
    let newExpensesList: Expense[] = parseJsonData(rawExpensesList);
    setFilteredYear(year);
    if (year === "All") {
      setExpensesList(newExpensesList);
      return;
    }
    newExpensesList = newExpensesList.filter((item) => {
      return item.date.getFullYear().toString() === year;
    });
    setExpensesList(newExpensesList);
  }
  //TODO move to data layer
  let rawExpensesList: RawExpense[] = getLocalStorageData();
  const [expensesList, setExpensesList] = useState<Expense[]>(
    parseJsonData(rawExpensesList)
  );
  
  const [filteredYear, setFilteredYear] = useState<string>("All");
  return (
    <div>
      <Card className="expenses_header">
        <NewExpense onAddExpense={addExpenseHandler} />
      </Card>
      <Card>
      <ExpensesChart expenses={expensesList}/>
      </Card>
      <Expenses
        onchangeTitle={changeTitleHandler}
        onFilterExpensesByYear={filterYear}
        expenses={expensesList}
        filteredYear={filteredYear}
      />
    </div>
  );
}

export default App;
