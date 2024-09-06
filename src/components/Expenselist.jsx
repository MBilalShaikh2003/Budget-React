import React from 'react';
import Expenseitem from './Expenseitem';
import { useAppContext } from '../context/Appcontext';

const Expenselist = () => {
    const {expenses}=useAppContext()
    

    return (
        <div>
            <ul>
                {expenses.map((expense) => (
                    <Expenseitem 
                        key={expense.id}  // Add the key prop here
                        id={expense.id} 
                        name={expense.name} 
                        cost={expense.cost} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default Expenselist;
