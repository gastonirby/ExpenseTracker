import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'Pants',
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 5.99,
    date: new Date('2022-02-19')
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 17.59,
    date: new Date('2022-02-11')
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 16.34,
    date: new Date('2021-04-15')
  }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {}
})

function expensesReducer (state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id
      )
      const updatableExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload)
    default:
      return state
  }
}

function ExpensesContextProvider ({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  function addExpense (expenseData) {
    dispatch({ type: 'ADD', payload: expenseData })
  }

  function deleteExpense (id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function updateExpense (id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
