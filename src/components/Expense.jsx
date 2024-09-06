import React from 'react'
import { useAppContext } from '../context/Appcontext'
const Expense = () => {
  const{expenses}=useAppContext()
  const spent=expenses.reduce((total,item)=>{
    return(total+item.cost)
  },0)


  return (
    <div className='spent-container'>
      Spent : ${spent}</div>
  )
}

export default Expense