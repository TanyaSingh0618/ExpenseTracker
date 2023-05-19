import React from 'react';
import './ExpensesList.css';
import Expenseitems from './Expenseitems';

function ExpensesList(props) {
    if (props.data.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>

    }
    return (
        <div>
            <ul className='expenses-list '>
                {props.data.map((expense) => {
                    return <Expenseitems key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                })
                }
            </ul>
        </div>
    )
}

export default ExpensesList