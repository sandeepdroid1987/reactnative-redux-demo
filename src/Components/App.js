/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LandingPage from './LandingPage/LandingPage';
import DaySchedule from './DaySchedule/DaySchedule';
import {Router, Scene} from 'react-native-router-flux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {fetchWorkouts} from '../redux/action/workoutAction';
import {fetchStatus} from '../redux/action/statusAction';
import rootReducer from '../redux/reducer/rootReducer';
import data from '../data/mock.json';
import {save, load} from 'redux-localstorage-simple';
const store = createStore(rootReducer, load(), applyMiddleware(thunk, save()));

// fetch workout from json file
store.dispatch(fetchWorkouts(data));
store.dispatch(fetchStatus(data.workout_status));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              title="Workout Schedule"
              key="landing"
              component={LandingPage}
              initial={true}
            />
            <Scene
              title="Today's Workout"
              key="schedule"
              component={DaySchedule}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
