import React, {useState} from "react";
import {View, StyleSheet, TextInput, Modal, Button} from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const inputGoalHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Goal'
                    value={enteredGoal}
                    onChangeText={inputGoalHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>
                    <View>
                        <Button
                            title='ADD'
                            onPress={addGoalHandler}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '60%'
    },
    button: {
        width: '40%',
    }
});
export default GoalInput