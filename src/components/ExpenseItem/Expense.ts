type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

type RawExpense = {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export {Expense, RawExpense}