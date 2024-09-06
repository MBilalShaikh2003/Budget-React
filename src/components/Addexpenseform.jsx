import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/Appcontext'
import {v4 as uuidv4} from 'uuid'
const Addexpenseform = () => {

  const {dispatch}=useAppContext()
  const [name,Setname]=useState('')
  const [cost,Setcost]=useState('')

  
  const onSubmit=(event)=>{
    event.preventDefault();
    //alert(name)
    const expense={
      name:name,
      id:uuidv4(),
      cost:parseInt(cost)
    }
dispatch({
  type:"ADD-EXPENSE",
  payload:expense,
})


  }
  return (
    <div>
        <form onSubmit={onSubmit}>

            <label>Name</label>
            <div>
            <input type="text" id='name' required='required' value={name}  onChange={(event)=>Setname(event.target.value)}/>
            </div>
            <label >Cost</label>
            <div>
            <input type="text"  id='cost' required='required' value={cost}  onChange={(event)=>Setcost(event.target.value)}/>
            </div>
            <div>
            <button type='Submit'>Add</button>
            </div>
        </form>

    </div>
  )
}

export default Addexpenseform