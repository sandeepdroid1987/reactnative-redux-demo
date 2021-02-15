import workoutReducer from './workoutReducer';
import statusReducer from './statusReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  workoutData: workoutReducer,
  statusData: statusReducer,
});

export default rootReducer;
