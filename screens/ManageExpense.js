import { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'

function ManageExpense ({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  )
}

export default ManageExpense
