import {View, TextInput,StyleSheet, Button, Modal} from 'react-native';



const GoalInputContainer = ({goalInputHandler, addGoalHandler, enteredText}) => {
    return ( <>
    <Modal> 
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
    </Modal>
    </> );
}

const styles = StyleSheet.create({

    inputContainer: {
      backgroundColor:"#cc55a1",
      flexDirection:'row',
      justifyContent: "space-between",
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