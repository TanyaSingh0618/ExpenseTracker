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
    const filteredItems = expData.data.filter((expense) => {
        return expense.date.getFullYear().toString() === FilterYear;
    }, [FilterYear]);

    return (<div>
        <Card className='expenses'>
            <ExpenseFilter yearselected={FilterYear} onChangeFilter={filterSelectYear} />
            {filteredItems.map((expense) => {
                return <Expenseitems key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            })}
        </Card>
    </div>
    )
}

export default Expenses