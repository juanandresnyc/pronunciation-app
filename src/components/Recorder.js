import React from 'react';
import {connect} from 'react-redux';

import {recordWordTry, recordWordSuccess} from '../reducers/wordsReducer';
import {startRecorder, stopRecorder, setHeardWord} from '../reducers/recorderReducer';

import './Recorder.css';


class Recorder extends React.Component {
  constructor(props) {
    super(props);

    const recognitionEngine = new window.webkitSpeechRecognition();
    recognitionEngine.lang = 'en-US';
    recognitionEngine.interimResults = false;
    recognitionEngine.maxAlternatives = 1;

    recognitionEngine.onerror = props.stopRecorder;

    this.state = {
      recordingWord: null,
      recognitionEngine,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {recordingState, word, heardWord} = props.recorder;

    if (state.recordingWord !== word && recordingState === 'recording') {
      const words = props.words.data.map(w => w.word);
      const grammar = `#JSGF V1.0; grammar words; public <word> = ${words.join(' | ')};`
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      state.recognitionEngine.grammars = speechRecognitionList;

      state.recognitionEngine.onresult = e => {
        const newHeardWord = e.results[0][0].transcript.toLowerCase();

        if (newHeardWord === word) {
          props.recordWordSuccess(word);
        }
        props.recordWordTry(word);
        props.setHeardWord(newHeardWord);
        props.stopRecorder();
      }

      state.recognitionEngine.onnomatch = () => {
        props.recordWordTry(word);
        props.stopRecorder();
      };

      state.recognitionEngine.start();

      return {
        ...state,
        recordingWord: word,
      };
    }

    if (state.recordingWord && !heardWord && recordingState === 'idle') {
      state.recognitionEngine.abort();
      return {
        ...state,
        recordingWord: null,
      }
    }

    if (recordingState === 'idle' && state.recognitionEngine.onresult) {
      state.recognitionEngine.onresult = null;
      state.recognitionEngine.onnomatch = null;
      state.recognitionEngine.abort();
      setTimeout(() => {
        props.setHeardWord(null);
      }, 2000);
    }

    return null;
  }

  render() {
    const {heardWord} = this.props.recorder;
    if (heardWord) {
      if (heardWord === this.state.recordingWord) {
        return (
          <div className="has-background-success messageWrapper">
            Good job!
          </div>
        );
      } else {
        return (
          <div className="has-background-warning messageWrapper">
            {`heard "${heardWord}"`}
          </div>
        );
      }
    }

    return (
      <div className="messageWrapper">
        {this.state.recordingWord ? `Listening for ${this.state.recordingWord}` : 'Click on the test me button on a word in the list'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recorder: state.recorder,
    words: state.words,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    recordWordTry: word => dispatch(recordWordTry(word)),
    recordWordSuccess: word => dispatch(recordWordSuccess(word)),
    startRecorder: word => dispatch(startRecorder(word)),
    stopRecorder: () => dispatch(stopRecorder()),
    setHeardWord: word => dispatch(setHeardWord(word)),
  };
}

Recorder = connect(mapStateToProps, mapDispatchToProps)(Recorder);

export {
  Recorder,
};
