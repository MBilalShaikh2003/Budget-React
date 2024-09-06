import React, { createContext, useContext, useReducer } from "react";


const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    
    case 'ADD-EXPENSE':
      return{
        ...state,
        expenses:[...state.expenses,action.payload]
      }
    case 'DELETE-EXPENSE' :
      return{
        ...state,
        expenses:state.expenses.filter((expense)=>
          expense.id !== action.payload
        ),
      } 

    default:
      return state;
  }
};


const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Car Service', cost: 50 },
    { id: 3, name: 'Health Care', cost: 50 },
    { id: 4, name: 'Grocery', cost: 100 }
  ]
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
