
import { TouchableOpacity, TextInput, StyleSheet, Text, View, Button } from 'react-native';

const GoalItem = props =>
(<TouchableOpacity onPress={
  ()=>props.onDelete(props.goalItem)}>
  <View style={styles.listItem}>
    <Text >{props.title} {props.goalItem}</Text>
  </View>
</TouchableOpacity>)
  ;


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: 'lightyellow',
    borderColor: 'black',
    borderWidth: 2
  }
});

export default GoalItem;