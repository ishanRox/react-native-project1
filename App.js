import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const addGoalHandler = (goalTitle) => {
    console.log(goalTitle, 'title');
    setCourseGoal((previouse) => [...previouse, { key: Math.random(), value: goalTitle }]);
    setModalShow(false);
  };

  const onDeleteHandler = (index) => {
    console.log(index, 'clicked');
    setCourseGoal(courseGoal.filter(goal => goal.key !== index));
  };

  const cancelHandler = _ => {
    setModalShow(false);
  };

  return (
    <View style={styles.screen}>
      <Button onPress={() => { setModalShow(true) }} title='show modal' />
      <GoalInput cancel={cancelHandler} visibility={modalShow} onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoal}
        renderItem={
          (goal) =>
            <GoalItem goalItem={goal.item.key} onDelete={onDeleteHandler} title={goal.item.value} />
        }
      />

    </View>
  );
} const styles = StyleSheet.create({
  screen: { padding: 50 },
});