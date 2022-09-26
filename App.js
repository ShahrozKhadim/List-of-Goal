import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";

import GoalItem from './component/GoalItem';
import GoalInput from "./component/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

    const addEnteredGoal = (goalTitle) => {
        setCourseGoal(currentGoal => [
            ...currentGoal,
            {id: Math.random().toString(), value: goalTitle}])
        setIsAddMode(false)
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoal(
            (currentGoals) => {
                return currentGoals.filter(
                    (goal) => goal.id !== goalId)
            }
        );
        console.log(goalId)
    };
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false)
    }
    return (
        <View style={styles.container}>
            <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
            <GoalInput visible={isAddMode} onAddGoal={addEnteredGoal} onCancel={cancelGoalAdditionHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoal}
                renderItem={itemData => <GoalItem
                    id={itemData.item.id}
                    onDelete={removeGoalHandler}
                    title={itemData.item.value}/>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
    }

});
