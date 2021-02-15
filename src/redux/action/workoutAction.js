export const FETCH_WORKOUT_LIST_SUCCESS = 'FETCH_WORKOUT_LIST_SUCCESS';

//******************************//
// fetching List with Mock API //
//******************************//
const fetchWorkoutSuccess = (workouts) => ({
  type: FETCH_WORKOUT_LIST_SUCCESS,
  payload: workouts,
});

// fetch workout List
export const fetchWorkouts = (workouts) => {
  return (dispatch) => {
    dispatch(fetchWorkoutSuccess(workouts));
  };
};

//******************************//
// fetching List By Network API //
//******************************//

// export const fetchWorkout = () => {
//   let workoutList = [];
//   return (dispatch) => {
//     axios
//       .get('/module/workout/0')
//       .then((response) => {
//         workoutList = response.data.data;
//         dispatch({
//           type: FETCH_WORKOUT_LIST_SUCCESS,
//           payload: workoutList,
//         });
//       })
//       .catch((err) => {
//         console.log('Error: ', err);
//       });
//   };
// };
