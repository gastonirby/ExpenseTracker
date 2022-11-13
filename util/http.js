import axios from 'axios'

function storeExpense (expenseData) {
  axios.post(
    'https://expensetracker-c24af-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  )
}

export default storeExpense
