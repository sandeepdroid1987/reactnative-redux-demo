import {FETCH_STATUS_LIST_SUCCESS} from '../action/statusAction';

const initState = {
  status: [],
};

const statusReducer = (state = initState, action) => {
  if (action.type === FETCH_STATUS_LIST_SUCCESS) {
    return {
      ...state,
      status: action.payload,
    };
  }
  return state;
};

export default statusReducer;
