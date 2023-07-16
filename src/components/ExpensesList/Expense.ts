type Expense = {
  id:string,
  title: string;
  amount: number;
  date: Date;
}

type RawExpense = {
  id:string,
  title: string;
  amount: string;
  date: string;
}

type TitleChangeInfo = {
  enteredTitle: string;
  id:string,
}

export {Expense, RawExpense, TitleChangeInfo}