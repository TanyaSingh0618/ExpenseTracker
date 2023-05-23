import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
            <ExpensesChart expenses={filteredItems} />
            <ExpensesList data={filteredItems} />
        </Card>
    </div>
    )
}

export default Expenses