import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import Card from '../../UI/Card';
import { RawExpense } from '../../ExpensesList/Expense';
import { useState } from 'react';

export default function NewExpense({onAddExpense} : {onAddExpense:Function}){

    function saveExenseDataHandler (userInput:RawExpense){
        userInput.id = Math.random().toString()
        onAddExpense(userInput)
    }
    const [expenseForm, SetExpenseForm] = useState(<button onClick = {showForm}>Add New Expense</button>)
    function showForm (){
        SetExpenseForm(<ExpenseForm onSaveExpenseDate = {saveExenseDataHandler} hideForm={hideForm}/>)
    }

    function hideForm (){
        SetExpenseForm(<button onClick = {showForm}>Add New Expense</button>)
    }
    return (
        <Card className="new-expense">
            {expenseForm}
        </Card>
    )
}