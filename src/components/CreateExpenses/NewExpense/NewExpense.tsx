import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm"
import Card from '../../UI/Card';

export default function NewExpense(){
    return (
        <Card className="new-expense">
            <ExpenseForm></ExpenseForm>
        </Card>
    )
}