import React from 'react';
import './ExpenseDate.css';

function ExpenseItemDate(expData) {
    const month = expData.date?.toLocaleString('en-US', { month: 'long' });
    const year = expData.date?.getFullYear();
    const day = expData.date?.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div>
            <div className='expense_date'>
                <div className='expense_date__month'>{month}</div>
                <div className='expense_date__year'>{year}</div>
                <div className='expense_date__day'>{day}</div>
            </div>
        </div>
    )
}

export default ExpenseItemDate