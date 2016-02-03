import { GET_SETTINGS, UPDATE_SETTINGS } from '../constants/actionTypes';

const INITIAL_STATE = {
  tag1: '',
  tag2: '',
  tag3: '',
  isBroadcasting: null
};

export default function(state=INITIAL_STATE, action){

  switch(action.type) {
    case GET_SETTINGS:
      return action.payload;
    case UPDATE_SETTINGS: 
      return action.payload;
    default:
      return state;
  }
}
