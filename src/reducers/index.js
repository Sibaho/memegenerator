import {combineReducers} from 'redux';
import {RECEIVE_MEMES, NEW_MEME} from '../actions';

function memes(state=[], action){
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes
    default:
      return state;
  }
}

function myMemes(state=[], action){
  switch (action.type) {
    case NEW_MEME:
      state = [...state, action.meme];
      return state;
    default:
      return state;
  }
}

const rootReducers = combineReducers({memes, myMemes})

export default rootReducers
