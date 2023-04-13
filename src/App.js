import './App.css';
import Expenses from './Component/Expenses/Expenses';
import NewExpenses from './Component/Expenses/NewExpense/NewExpenses';

function App() {
  // const date = moment();

  // const currentDate = date.format('LL');
  const expenseItems = [
    {
      id: 'e1',
      title: 'tv',
      amount: '$200',
      date: new Date(2023, 0, 22)
    },
    {
      id: 'e2',
      title: 'soap',
      amount: '$50',
      date: new Date()
    },
    {
      id: 'e3',
      title: 'car Insurance',
      amount: '$260',
      date: new Date()
    },
    {
      id: 'e4',
      title: 'rent',
      amount: '$400',
      date: new Date()
    }
  ]

  const AddExpenseData = (expense) => {
    console.log('appjs');
    console.log(expense);
  }


  return (
    <div className='App-header'>
      <NewExpenses onAddExpense={AddExpenseData} />
      <Expenses data={expenseItems} />
    </div>
  );
}

export default App;
