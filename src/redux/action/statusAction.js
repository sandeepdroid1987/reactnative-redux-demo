export const FETCH_STATUS_LIST_SUCCESS = 'FETCH_STATUS_LIST_SUCCESS';

//******************************//
// fetching List with Mock API //
//******************************//
const fetchStatusSuccess = (status) => ({
  type: FETCH_STATUS_LIST_SUCCESS,
  payload: status,
});

// fetch workout List
export const fetchStatus = (status) => {
  return (dispatch) => {
    dispatch(fetchStatusSuccess(status));
  };
};
