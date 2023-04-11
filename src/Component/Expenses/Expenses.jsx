import React from 'react';
import Expenseitems from './Expenseitems';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(expData) {
    return (<Card className='expenses'>
        <Expenseitems title={expData.data[0].title} amount={expData.data[0].amount} date={expData.data[0].date} />
        <Expenseitems title={expData.data[1].title} amount={expData.data[1].amount} date={expData.data[1].date} />
        <Expenseitems title={expData.data[2].title} amount={expData.data[2].amount} date={expData.data[2].date} />
        <Expenseitems title={expData.data[3].title} amount={expData.data[3].amount} date={expData.data[3].date} />
    </Card>
    )
}

export default Expenses