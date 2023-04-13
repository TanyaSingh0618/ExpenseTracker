import React from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props) {
    const filterChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <h4>Filter by year</h4>
                <select value={props.yearselected} onChange={filterChangeHandler} style={{ color: 'black' }}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter


