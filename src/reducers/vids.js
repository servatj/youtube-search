export default function reducer(state={
    vids: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_VIDS": {
        return {...state, fetching: true}
      }
      case "FETCH_VIDS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VIDS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }
    }

    return state
}
