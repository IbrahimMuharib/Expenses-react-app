import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm"
import Card from '../../UI/Card';
import { RawExpense } from '../../ExpensesList/Expense';

export default function NewExpense({onAddExpense} : {onAddExpense:Function}){

    function saveExenseDataHandler (userInput:RawExpense){
        userInput.id = Math.random().toString()
        onAddExpense(userInput)
    }
    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseDate = {saveExenseDataHandler}/>
        </Card>
    )
}