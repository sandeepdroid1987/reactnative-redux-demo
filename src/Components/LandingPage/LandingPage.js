import React, {useEffect} from 'react';
import LandingCard from './LandingCard';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

const LandingPage = ({workouts}) => {
  return workouts.schedule.map((data, index) => {
    return (
      <View key={index}>
        <LandingCard workouts={data} />
      </View>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    workouts: state.workoutData.workouts,
  };
};

export default connect(mapStateToProps)(LandingPage);
