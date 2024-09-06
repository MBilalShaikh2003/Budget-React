import { useState } from 'react';
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Expense from './components/Expense';
import Expenselist from './components/Expenselist';
import Addexpenseform from './components/Addexpenseform';
import AppProvider from './context/Appcontext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <div className="app-container">
        <h2>Budget Calculator</h2>
        <div>
          <div><Budget /></div>
          <div><Remaining /></div>
          <div><Expense /></div>
        </div>
        <h3>Expense</h3>
        <Expenselist />
        <h3>Add Expense</h3>
        <Addexpenseform />
      </div>
    </AppProvider>
  );
}

export default App;
