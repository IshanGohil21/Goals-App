import React, { useState } from 'react';
import {View ,TextInput, StyleSheet, Button, Modal} from 'react-native'



const GoalInput = props => {
    const [enterdGoal,setEnteredGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnteredGoal(enterdText);
      };
    const addGoalHandler = () => {
        props.onAddGoal(enterdGoal);
        setEnteredGoal('');
    };
    return ( 
    <Modal visible = {props.visible}>
    <View style={styles.inputContainer}>
    <TextInput
    placeholder="Course Goal"
    style={styles.input}
    onChangeText={goalInputHandler}
    value={enterdGoal}
    />
    <View style={styles.buttonContainer} > 
   <View style={styles.button}>
       <Button title="ADD" onPress={addGoalHandler}/>
    </View>
    <View style={styles.button}>
    <Button title="Cancel" color="red" onPress={props.onCancel}/>
    </View>
  </View>
  </View>
  </Modal>
    );
};

const styles= StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
        },
        input: {
          marginBottom:10,
          width: '80%', 
          borderColor:'orange',
          borderWidth: 3,
          padding:3,
        },
    buttonContainer: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})


export default GoalInput;