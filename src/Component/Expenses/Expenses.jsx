import React, { useState } from 'react';
import Expenseitems from './Expenseitems';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(expData) {
    const [FilterYear, setFilterYear] = useState('2019');


    const filterSelectYear = (SelectYear) => {
        setFilterYear(SelectYear);
    }

    return (<div>
        <Card className='expenses'>
            <ExpenseFilter yearselected={FilterYear} onChangeFilter={filterSelectYear} />
            <Expenseitems title={expData.data[0].title} amount={expData.data[0].amount} date={expData.data[0].date} />
            <Expenseitems title={expData.data[1].title} amount={expData.data[1].amount} date={expData.data[1].date} />
            <Expenseitems title={expData.data[2].title} amount={expData.data[2].amount} date={expData.data[2].date} />
            <Expenseitems title={expData.data[3].title} amount={expData.data[3].amount} date={expData.data[3].date} />
        </Card>
    </div>
    )
}

export default Expenses