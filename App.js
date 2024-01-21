import { useState } from 'react';

import { FlatList, StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setEnteredText(text)
  };

  const addGoalHandler = () => {
    setGoals( prevState => [...prevState, enteredText])
    setEnteredText('')
  };

  const deleteGoalHandler = (idx) => {
  setGoals(currentGoals => currentGoals.filter((_, index) => index !== idx));
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter your goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        /> 
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>

    
       <View style={styles.goalsContainer}>
          <FlatList
              data={goals}
              renderItem={itemData => (
                <Pressable onPress={() => deleteGoalHandler(itemData.index)}> 
                  <Text style={styles.goalText} key={itemData.index}>{ itemData.item}</Text>
                </Pressable>
            )}
          />
      </View>
    </View>
  );
};

  const styles = StyleSheet.create({
    appContainer: {
      padding:50,
      flex:1,
      backgroundColor: '#a1ffdd'
    },
    inputContainer: {
      flexDirection:'row',
      justifyContent: "space-between",
      alignItems:'center',
      flex:1,
      borderBottomWidth:1,
      borderBottomColor:'black'
    },
    textInput: {
      borderWidth:1,
      borderColor:'black',
      width:'80%',
      height:'60%',
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
  })

