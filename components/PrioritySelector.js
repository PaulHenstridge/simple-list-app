import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const priorities = ['LOW','MEDIUM','HIGH']


const PrioritySelector = ({onPrioritySelect}) => {

    const [selectedPriority, setelectedPriority] = useState('')

    const handlePress = value => {
        setelectedPriority(value)
        onPrioritySelect(value)
    }

    return (  
    <View style={styles.container}>
        {priorities.map( priority => (
            <Pressable 
                key={priority}
                onPress = {() => handlePress(priority)}
                style={[styles[priority], selectedPriority === priority && styles.selected]}
            >
                <Text>{priority}</Text>
            </Pressable>
        ))}

    </View>);
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    button: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
    },
    selected: {
      backgroundColor: '#ddd',
    },
    LOW:{
        backgroundColor:'yellow',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    MEDIUM:{
        backgroundColor:'aqua',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    HIGH:{
        backgroundColor:'red',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
  });

export default PrioritySelector;