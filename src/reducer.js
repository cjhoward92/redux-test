import {
  INCREMENT
} from './actions';

export const INITIAL_STATE = {
  count: 0
};

const reducer = (state = INITIAL_STATE, action = { type: 'unknown' }) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;    
  }
};

export default reducer;