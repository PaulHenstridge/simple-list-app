import { useState } from 'react';

import { FlatList, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

const [enteredText, setEnteredText] = useState('');
const [goals, setGoals] = useState([])

  const goalInputHandler = (text) => {
    setEnteredText(text)
  }

  const addGoalHandler = () => {
    setGoals( prevState => [...prevState, enteredText])
  }

  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput 
      placeholder='Enter your goal'
       style={styles.textInput}
       onChangeText={goalInputHandler}
       /> 
      <Button
       title="Add Goal"
       onPress={addGoalHandler}
       />
    </View>

    
       <View style={styles.goalsContainer}>
       <ScrollView>
      {goals.map((goal, index) => <Text style={styles.goalText} key={index}>{goal}</Text>)}
      </ScrollView>
      </View>
   
   
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    flex:1,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: "space-between",
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'black'
  },
  textInput: {
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    height:'50%',
    marginRight:8,
    padding:8,

  },
  goalsContainer:{
    flex:5
  },
  goalText:{
    padding:12,
    borderRadius:12,
    borderWidth:2,
    borderColor:'blue',
    backgroundColor:'yellow',
    fontWeight:'bold',
    margin:6
  }
});
