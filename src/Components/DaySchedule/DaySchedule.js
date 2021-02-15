import React, {useEffect} from 'react';
import ScheduleCard from './DayScheduleCard';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const DaySchedule = (props) => {
  return props.scheduleArr.map((data, index) => {
    return <ScheduleCard data={data} key={index} />;
  });
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 14,
    marginTop: 20,
    height: 130,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    display: 'flex',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    marginTop: 2,
  },
  subHeading: {
    color: '#fff',
    fontSize: 20,
  },
  buttonCont: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
export default DaySchedule;
