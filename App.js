import { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import GoalInputContainer from './components/GoalInputContainer';
import GoalsList from './components/GoalsList';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [enteredText, setEnteredText] = useState('');
  const [priority, setPriority] = useState('');
  const [goals, setGoals] = useState([]);


const openModal = () => {
  setModalIsVisible(true)
}

const closeModal = () => {
  setModalIsVisible(false)
}

  const goalInputHandler = (text) => {
    setEnteredText(text)
  };
  const priorityInputHandler = (pLevel) => {
    setPriority(pLevel)
  };

  const addGoalHandler = () => {
    setGoals( prevState => [...prevState, {enteredText, priority}])
    setEnteredText('')
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (idx) => {
  setGoals(currentGoals => currentGoals.filter((_, index) => index !== idx));
  }
  return (
    <View style={styles.appContainer}>
      <Button title='Add new Goal' color='red' onPress={openModal}/>
      { modalIsVisible && <GoalInputContainer 
        goalInputHandler={goalInputHandler} 
        priorityInputHandler={priorityInputHandler}
        addGoalHandler={addGoalHandler} 
        enteredText={enteredText}
        priority={priority}
      />}
      <GoalsList goals={goals} deleteGoal={deleteGoalHandler} />
    </View>
  );
};

  const styles = StyleSheet.create({
    appContainer: {
      padding:50,
      flex:1,
      backgroundColor: '#1d0559'
    }
  })

