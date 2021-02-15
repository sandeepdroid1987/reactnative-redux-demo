import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const LandingCard = (props) => {
  const goToSchedule = () => {
    Actions.schedule({scheduleArr: props.workouts.workout});
  };
  return (
    <TouchableOpacity style={styles.card} onPress={goToSchedule}>
      <Text style={styles.heading}>{props.workouts.day}</Text>
      {/* <View style={styles.dataScreen}>
        <Text style={styles.heading}>{props.workouts.type}</Text>
        <Text style={styles.heading}>{props.workouts.count}</Text>
      </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 14,
    marginTop: 14,
    height: 80,
    backgroundColor: 'skyblue',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    marginTop: 2,
  },
  // dataScreen: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginVertical: 12,
  // },
  // subHeading: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});

export default LandingCard;
