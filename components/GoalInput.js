import { useState } from 'react';
import { Modal, TextInput, StyleSheet, Text, View, Button } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  return <Modal visible={props.visibility}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={(word) => setEnteredGoal(word)} placeholder='Course Goal' />
      <View style={styles.buttons}>
        <Button title='Cancel' color="red" onPress={props.cancel} />
        <Button title="Add" onPress={
          () => props.onAddGoal(enteredGoal)
        } />
      </View>
    </View>
  </Modal>
}
  ;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 2
  },
  buttons: {
    width:'60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default GoalInput;