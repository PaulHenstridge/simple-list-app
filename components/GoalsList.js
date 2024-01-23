
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';

const GoalsList = ({goals, deleteGoalHandler}) => {
    return ( <>
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
    </> );
}
 
const styles = StyleSheet.create({
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

export default GoalsList;