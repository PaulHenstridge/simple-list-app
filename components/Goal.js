import {View, Text, Pressable, StyleSheet} from 'react-native';

const Goal = ({goalData, onDelete}) => {
    return ( 
        <Pressable onPress={onDelete}> 
        <Text style={styles[goalData.item.priority]}>{ goalData.item.enteredText}</Text>
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
    },
    LOW:{
        padding:12,
        backgroundColor:'yellow',
        fontWeight:'bold',
        margin:6
      },
    MEDIUM:{
        padding:12,
        backgroundColor:'aqua',
        fontWeight:'bold',
        margin:6
      },
    HIGH:{
        padding:12,
        backgroundColor:'red',
        fontWeight:'bold',
        margin:6
      },
  })

 
export default Goal;