import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const priorities = ['LOW','MEDIUM','HIGH']
//     { label: 'LOW', value: 'low' },
//     { label: 'MEDIUM', value: 'medium' },
//     { label: 'HIGH', value: 'high' },
//   ];

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
                style={[styles.button, selectedPriority === priority && styles.selected]}
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
    text: {
      // Text styling
    },
  });

export default PrioritySelector;