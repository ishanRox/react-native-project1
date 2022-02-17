import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (goalTitle) => {
    console.log(goalTitle,'title');
    setCourseGoal((previouse) => [...previouse, { key: Math.random(), value: goalTitle }]);
  };

 const onDeleteHandler=(index)=>{
  console.log(index,'clicked'); 
  setCourseGoal(courseGoal.filter(goal=>goal.key!==index));
 } ;

  return (
    <View style={styles.screen}>
      <Button title='show modal'/>
    <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoal}
        renderItem={
          (goal) =>
            <GoalItem goalItem={goal.item.key} onDelete={onDeleteHandler} title={goal.item.value} />
        }
      />

    </View>
); } const styles = StyleSheet.create({ screen: { padding: 50 },
});