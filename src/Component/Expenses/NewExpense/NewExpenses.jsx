import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {
    const SaveExpenseDataHandler = (enterExpData) => {
        const expenseData = {
            ...enterExpData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new_expense'>
            <ExpenseForm SaveExpenseData={SaveExpenseDataHandler} />

        </div>
    )
}

export default NewExpenses