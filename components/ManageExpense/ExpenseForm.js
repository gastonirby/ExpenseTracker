import { Text, View, StyleSheet } from 'react-native'
import Input from './Input'

function ExpenseForm () {
  function amountChangedHandler () {}
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {}
          }}
        />
      </View>
      <Input
        label='Description'
        textInputConfig={{
          multiline: true
        }}
      />
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 80
    },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  }
})
