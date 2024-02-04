import {View, Text, Pressable, StyleSheet} from 'react-native';

const Goal = ({goalData, onDelete}) => {
    return ( 
        <Pressable onPress={onDelete}> 
        <Text style={styles.goalText}>{ goalData.item.enteredText}</Text>
        <Text>{goalData.item.priority} PRIORITY</Text>
      </Pressable>
     );
}

const styles = StyleSheet.create({
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

 
export default Goal;