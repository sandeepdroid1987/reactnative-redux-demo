import {FETCH_WORKOUT_LIST_SUCCESS} from '../action/workoutAction';

const initState = {
  workouts: [],
};

const workoutReducer = (state = initState, action) => {
  if (action.type === FETCH_WORKOUT_LIST_SUCCESS) {
    return {
      ...state,
      workouts: action.payload,
    };
  }
  return state;
};

export default workoutReducer;
