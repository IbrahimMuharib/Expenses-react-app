interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface RawExpense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export {Expense, RawExpense}