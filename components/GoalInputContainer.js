import {View, TextInput,StyleSheet, Button, Modal} from 'react-native';
import PrioritySelector from './PrioritySelector';



const GoalInputContainer = ({goalInputHandler, priorityInputHandler, addGoalHandler, enteredText, priority}) => {
    return ( <>
    <Modal> 
          <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter your goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        /> 
        <PrioritySelector 
          onPrioritySelect={priorityInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          disabled={!priority}
        />
      </View>
    </Modal>
    </> );
}

const styles = StyleSheet.create({

    inputContainer: {
      backgroundColor:"#cc55a1",
      flexDirection:'column',
      justifyContent: "center",
      alignItems:'center',
      flex:1,
      borderBottomWidth:1,
      borderBottomColor:'black'
    },
    textInput: {
        backgroundColor:'#a1ffdd',
      borderWidth:1,
      borderColor:'black',
      width:'80%',
      height:'max-content',
      marginRight:8,
      padding:8,
    },

  })

 
export default GoalInputContainer;