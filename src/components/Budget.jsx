

import React from 'react';
import { useAppContext } from '../context/Appcontext';


const Budget = () => {
    const { budget } = useAppContext();
    return (
        <div className='budget-container'>
            <p>
                Budget: <span>${budget}</span>
            </p>
        </div>
    );
};

export default Budget;
