import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card';


function Expenseitems(expData) {
    return (
        <Card className='expense_item'>
            <ExpenseItemDate date={expData.date} />
            <div className='expense_item__description'>
                <h2 className='expense_title'>{expData.title}</h2>
                <div className='expense_item__price'>{expData.amount}</div>
            </div>
        </Card>
    )
}

export default Expenseitems