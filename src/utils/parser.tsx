import { Expense, RawExpense } from "../components/ExpensesList/Expense";

function parseJsonData(expensesData: RawExpense[]): Expense[] {
    let expenses: Expense[] = expensesData.map(
      (expense: RawExpense, i: number) => ({
        ...expense,
        amount: parseFloat(expense.amount),
        date: new Date(expense.date),
      })
    );
    return expenses;
  }

  function getLocalStorageData() :  RawExpense[]{
    let data = localStorage.getItem('Expenses')?.toString();
    let rawExpensesList : RawExpense[] = []
  if (data !== undefined) {
    rawExpensesList = JSON.parse(data);
  }
  return rawExpensesList
  }

  export {parseJsonData, getLocalStorageData}