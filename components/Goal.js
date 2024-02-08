import {View, Text, Pressable, StyleSheet} from 'react-native';

const Goal = ({goalData, onDelete}) => {

    return ( 
        <Pressable
            onPress={onDelete} 
            style={styles[goalData.item.priority]}
        > 
        <Text >{ goalData.item.enteredText}</Text>
        <Text >{ goalData.item.priority}</Text>
        <Text >{goalData.item.location } - </Text>
      </Pressable>
     );
}

const styles = StyleSheet.create({
    LOW:{
        padding:12,
        backgroundColor:'yellow',
        fontWeight:'bold',
        fontSize:16,
        margin:6,
        borderWidth:3,
        borderColor:'black',
      },
    MEDIUM:{
        padding:12,
        backgroundColor:'aqua',
        fontWeight:'bold',
        margin:6,
        borderWidth:3,
        borderColor:'black',
      },
    HIGH:{
        padding:12,
        backgroundColor:'red',
        fontWeight:'bold',
        margin:6,
        borderWidth:3,
        borderColor:'black',
      },
  })

 
export default Goal;