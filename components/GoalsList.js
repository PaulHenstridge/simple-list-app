
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';
import Goal from './Goal';


const GoalsList = ({goals, deleteGoalHandler}) => {
    return ( <>
           <View style={styles.goalsContainer}>
          <FlatList
              data={goals}
              renderItem={itemData => (
               <Goal 
                goalData={itemData}
                onDelete={() => deleteGoalHandler(itemData.index)}
               />
            )}
            keyExtractor={(item, index) => index.toString()} 
          />
      </View>
    </> );
}
 
const styles = StyleSheet.create({
    goalsContainer:{
      flex:5
    },
  })

export default GoalsList;