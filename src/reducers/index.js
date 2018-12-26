import {combineReducers} from 'redux';

import {recorderReducer} from './recorderReducer';
import {wordsReducer} from './wordsReducer';

export default combineReducers({
  recorder: recorderReducer,
  words: wordsReducer,
});
