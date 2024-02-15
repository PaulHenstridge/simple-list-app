
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';
// import DraggableFlatList from 'react-native-draggable-flatlist'
import Goal from './Goal';


const GoalsList = ({goals, deleteGoal, setGoals}) => {

  const onDragEnd = ({data}) => {
    setGoals(data); // Update the goals list based on the new order
  };

    return ( <>
           <View style={styles.goalsContainer}>
          <FlatList
              data={goals}
              renderItem={({item, index, drag, isActive }) => (
                <Goal 
                  goalData={item}
                  onDelete={() => deleteGoal(index)}
                  onLongPress={drag}
                />
              )}
            keyExtractor={(item, index) => index.toString()} 
            onDragEnd={onDragEnd}
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