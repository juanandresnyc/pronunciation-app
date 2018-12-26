function startRecorder(word) {
  return {
    type: 'RECORDER_START',
    data: word,
  };
}

function stopRecorder() {
  return {
    type: 'RECORDER_STOP',
  };
}

function setHeardWord(word) {
  return {
    type: 'SET_HEARD_WORD',
    data: word,
  }
}

function recorderReducer(state = {}, action) {
  switch (action.type) {
    case 'RECORDER_START':
      return {
        ...state,
        recordingState: 'recording',
        word: action.data,
      };
    case 'RECORDER_STOP':
      return {
        ...state,
        recordingState: 'idle',
        word: null,
      };
    case 'SET_HEARD_WORD':
      return {
        ...state,
        heardWord: action.data,
      };
    default:
      return state;
  }
}

export {
  setHeardWord,
  recorderReducer,
  startRecorder,
  stopRecorder,
};
