const fetchWords = () => {
  return {
    type: 'FETCH_WORDS',
    data: [
      {word: 'circuit', tries: 0, successes: 0},
      {word: 'ephemeral', tries: 0, successes: 0},
    ],
  };
};

const addWord = word => dispatch => {
  fetch(`https://mydictionaryapi.appspot.com/?define=${word}`)
  .then(response => {
    if (response.status === 200) {
      dispatch({
        type: 'ADD_WORD',
        data: {
          word,
          tries: 0,
          successes: 0,
        },
      });
    }
  });
}

const recordWordTry = word => {
  return {
    type: 'RECORD_WORD_TRY',
    word,
  };
}

const recordWordSuccess = word => {
  return {
    type: 'RECORD_WORD_SUCCESS',
    word,
  };
}

const initialState = {
  data: [],
};

function wordsReducer(state = initialState, action) {
  let data, word;
  switch (action.type) {
    case 'FETCH_WORDS':
      return {
        ...state,
        data: action.data,
      };
    case 'ADD_WORD':
      return {
        ...state,
        data: [...state.data, action.data],
      }
    case 'RECORD_WORD_TRY':
      data = state.data.slice();
      word = data.find(w => w.word === action.word);
      word.tries += 1;
      return {
        ...state,
        data,
      };
    case 'RECORD_WORD_SUCCESS':
      data = state.data.slice();
      word = data.find(w => w.word === action.word);
      word.successes += 1;
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};

export {
  wordsReducer,
  fetchWords,
  addWord,
  recordWordTry,
  recordWordSuccess,
};
