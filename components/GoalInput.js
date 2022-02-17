import { useState } from 'react';
import { Modal, TextInput, StyleSheet, Text, View, Button } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  return <Modal visible={props.visibility}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={(word) => setEnteredGoal(word)} placeholder='Course Goal' />
      <Button title="Add" onPress={
        () => props.onAddGoal(enteredGoal)
      } />
    </View>
  </Modal>
}
  ;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 2
  }
});

export default GoalInput;