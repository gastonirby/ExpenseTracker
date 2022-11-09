import { View, FlatList, Text } from 'react-native'

function renderExpenseItem (itemData) {
  return <Text>{itemData.item.description}</Text>
}

function ExpensesList ({ expenses }) {
  return (
    <View>
      <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ExpensesList
