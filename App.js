import { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as Location from 'expo-location';

import axios from 'axios';

import GoalInputContainer from './components/GoalInputContainer';
import GoalsList from './components/GoalsList';



export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [enteredText, setEnteredText] = useState('');
  const [priority, setPriority] = useState('');
  const [goals, setGoals] = useState([]);
  const [myLocation, setMyLocation] = useState('')


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

  const getLocation = async () => {
    // Request permission

    setMyLocation(location.data.name)
  };

  const addGoalHandler = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }
  
    // Get coordinates
    const {coords} = await Location.getCurrentPositionAsync({})
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    console.log({url})

    // Reverse geocode for location name
    const response = await axios.get(url) 
    console.log(response.data.name)
    location = response.data.name
    setGoals( prevState => [...prevState, {enteredText, priority, location}])
    setEnteredText('')
    setPriority('')
    setMyLocation('')
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (idx) => {
  setGoals(currentGoals => currentGoals.filter((_, index) => index !== idx));
  }
  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add new Goal' color='red' onPress={openModal}/>
        { modalIsVisible && <GoalInputContainer 
          goalInputHandler={goalInputHandler} 
          priorityInputHandler={priorityInputHandler}
          addGoal={addGoalHandler} 
          enteredText={enteredText}
          priority={priority}
        />}
        <GoalsList goals={goals} deleteGoal={deleteGoalHandler} />
      </View>
    </>
  );
};

  const styles = StyleSheet.create({
    appContainer: {
      padding:50,
      flex:1,
      backgroundColor: '#1d0559'
    }
  })

