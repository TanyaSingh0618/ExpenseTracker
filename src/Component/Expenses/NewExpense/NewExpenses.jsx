import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {
    const [show, setshow] = useState(false);
    const SaveExpenseDataHandler = (enterExpData) => {
        const expenseData = {
            ...enterExpData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setshow(false);

    }
    const startEditingHandler = () => {
        setshow(true);
    }
    const stopEditingHandler = () => {
        setshow(false);
    }

    return (
        <div className='new_expense'>
            {!show && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {show && <ExpenseForm SaveExpenseData={SaveExpenseDataHandler} cancelButton={stopEditingHandler} />}

        </div>
    )
}

export default NewExpenses