import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card';


function Expenseitems(expData) {

    const [title, setTitle] = useState(expData.title);
    const handleChangeTitle = () => {
        setTitle('abcd');
        console.log(title);
    }

    return (
        <Card className='expense_item'>
            <ExpenseItemDate date={expData.date} />
            <div className='expense_item__description'>
                <h2 className='expense_title'>{title}</h2>
                <div className='expense_item__price'>{expData.amount}</div>
            </div>
            <button onClick={handleChangeTitle}>Change Title</button>
        </Card>
    )
}

export default Expenseitems