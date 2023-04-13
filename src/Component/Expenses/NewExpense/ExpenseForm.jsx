import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [Information, setInformation] = useState({
        entertitle: '',
        enteramount: '',
        enterdate: ''
    })
    const TitleChangeHandler = (e) => {
        setInformation((prevState) => {
            return { ...prevState, entertitle: e.target.value }
        });
    }
    const AmountChangeHandler = (e) => {
        setInformation((prevState) => {
            return { ...prevState, enteramount: e.target.value }
        });
        // setInformation({ ...Information, amount: e.target.value });
    }
    const DateChangeHandler = (e) => {
        setInformation((prevState) => {
            return { ...prevState, enterdate: e.target.value }
        });
        // setInformation({ ...Information, enterdate: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: Information.entertitle,
            amount: Information.enteramount,
            date: new Date(Information.enterdate),
        }
        console.log(expenseData);
        setInformation({
            entertitle: '',
            enteramount: '',
            enterdate: ''
        })
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new_expense__controls'>
                <div className='new_expense__control'>
                    <label>Title</label>
                    <input type='text' value={Information.entertitle} onChange={TitleChangeHandler} />
                </div>
                <div className='new_expense__control'>
                    <label>Amount</label>
                    <input type='number' value={Information.enteramount} min='0.01' step='0.01' onChange={AmountChangeHandler} />
                </div>
                <div className='new_expense__control'>
                    <label>Date</label>
                    <input type='date' value={Information.enterdate} min='2019-01-01' max='2025-12-31' onChange={DateChangeHandler} />
                </div>

            </div>
            <div className='new_expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>

        </form>
    )
}

export default ExpenseForm