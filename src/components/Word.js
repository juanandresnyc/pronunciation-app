import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {startRecorder, stopRecorder} from '../reducers/recorderReducer';

import './Word.css';

class Word extends React.Component {
  onClick = () => {
    var utterThis = new SpeechSynthesisUtterance(this.props.word);
    var synth = window.speechSynthesis;
    utterThis.voice = synth.getVoices()[0];
    synth.speak(utterThis);
  }

  onRecord = () => {
    const {recordingState, word} = this.props.recorder;
    if (recordingState === 'recording' && word === this.props.word) {
      this.props.stopRecorder();
    } else {
      this.props.startRecorder(this.props.word);
    }
  }

  render() {
    const testing = this.props.recorder.word === this.props.word;

    const wordClasses = classNames({
      'animated': true,
      'pulse': true,
      'link': true,
      'has-text-link': true,
      'level-item': true,
    });

    const buttonClasses = classNames({
      'animated': true,
      'infinite': true,
      'slow': true,
      'level-item': true,
      'button': true,
      'is-primary': testing,
      'is-link': !testing,
      'heartBeat': testing,
    });

    return (
      <div className="wordWrapper is-mobile">
        <div className="level-left">
          <div className={wordClasses} onClick={this.onClick}>
            {`${this.props.word} (${this.props.successes}/${this.props.tries})`}
          </div>
        </div>
        <div className="level-right">
          <button className={buttonClasses} onClick={this.onRecord}>
            {testing ? 'stop' : 'test me'}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
    recorder: state.recorder,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startRecorder: word => dispatch(startRecorder(word)),
    stopRecorder: () => dispatch(stopRecorder()),
  };
}

Word = connect(mapStateToProps, mapDispatchToProps)(Word);

export {
  Word,
};
