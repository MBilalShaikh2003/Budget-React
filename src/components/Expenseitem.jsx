import React from 'react'
import { TiDelete } from "react-icons/ti";
import { useAppContext } from '../context/Appcontext';



const Expenseitem = (props) => {
  const {dispatch}=useAppContext()

  const todelete=()=>{
    dispatch({
      type:'DELETE-EXPENSE',
      payload:props.id
    })


  }
  



  return (
    <div>
        <li>
            {props.name}
            
                <span>${props.cost}</span>
                <TiDelete  className='TiDelete' onClick={todelete} />

            
        </li>
        </div>
  )
}

export default Expenseitem