import { Expense, RawExpense, TitleChangeInfo } from "./components/ExpensesList/Expense.ts";
import Expenses from "./components/ExpensesList/Expenses/Expenses";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/CreateExpenses/NewExpense/NewExpense.tsx";
import {parseJsonData, getLocalStorageData} from "./utils/parser.tsx";
import { useState } from 'react';

function App(): JSX.Element | null {

  function addExpenseHander(rawExpense:RawExpense){
    let rawExpensesList : RawExpense[] = getLocalStorageData()
    rawExpensesList.push(rawExpense)
    localStorage.setItem('Expenses', JSON.stringify(rawExpensesList));
    const newExpensesList:Expense[] = parseJsonData(rawExpensesList)
    setExpensesList(newExpensesList)
  }

  function changeTitleHandler(titleChangeInfo:TitleChangeInfo){
    let rawExpensesList : RawExpense[] = getLocalStorageData()
    const findIndex = rawExpensesList.find(rawExpense => {
      return rawExpense.id === titleChangeInfo.id;
     });
     if (findIndex !== undefined) {
      findIndex.title = titleChangeInfo.enteredTitle;
     }
    localStorage.setItem('Expenses', JSON.stringify(rawExpensesList));
    const newExpensesList:Expense[] = parseJsonData(rawExpensesList)
    setExpensesList(newExpensesList)
  }

  function filterYear(year:string){
    let rawExpensesList : RawExpense[] = getLocalStorageData()
    let newExpensesList:Expense[] = parseJsonData(rawExpensesList)
    if (year === "All"){
      setExpensesList(newExpensesList)
      return
    }
    newExpensesList = newExpensesList.filter((item)=>{
      console.log(item.date.getFullYear().toString())
      return item.date.getFullYear().toString() === year;
    })
    setExpensesList(newExpensesList)    
  }

  let rawExpensesList : RawExpense[] = getLocalStorageData()
  const [expensesList, setExpensesList] = useState<Expense[]>(parseJsonData(rawExpensesList))
  return (
    <div>
      <Card className="expenses_header">
        <NewExpense onAddExpense={addExpenseHander}/>
      </Card>
      <Expenses onchangeTitle= {changeTitleHandler} onFilterExpensesByYear = {filterYear} expenses={expensesList} />
    </div>
  );
}

export default App;
