import { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import GoalInputContainer from './components/GoalInputContainer';
import GoalsList from './components/GoalsList';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [enteredText, setEnteredText] = useState('');
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

  const addGoalHandler = () => {
    setGoals( prevState => [...prevState, enteredText])
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
          addGoalHandler={addGoalHandler} 
          enteredText={enteredText}
        />}
      
     
    <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler} />

    </View>
  );
};

  const styles = StyleSheet.create({
    appContainer: {
      padding:50,
      flex:1,
      backgroundColor: '#a1ffdd'
    }
  })

