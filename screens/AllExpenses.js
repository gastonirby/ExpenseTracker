import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

function AllExpenses () {
  const expensesCtx = useContext(ExpensesContext)

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Total'
      fallbackText='No expenses registered within the last 7 days'
    />
  )
}

export default AllExpenses
