// import React from 'react'
// import { useAppContext } from '../context/Appcontext'

// const Remaining = () => {
//     const {budget,expenses}=useAppContext()


// const totalexpense=expenses.reduce((total,item)=>{
//   return(total=total+item.cost)
// },0)


// //const alerttype=totalexpense > budget? alert("Over Budget"):alert("Under Budget")

//   return (
//     <div className='Remaining-container'> 
//       Remaining: ${budget-totalexpense}
//     </div>
//   )
// }

// export default Remaining
import React from 'react';
import { useAppContext } from '../context/Appcontext';

const Remaining = () => {
    const { budget, expenses } = useAppContext();

    const totalexpense = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const isOverBudget = totalexpense > budget;

    return (
      <div
      className={`remaining-container ${isOverBudget ? 'over-budget' : 'under-budget'}`}
  >
      Remaining: ${budget - totalexpense}
  </div>
  
    );
};

export default Remaining;
