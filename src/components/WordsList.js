import React from 'react';
import {connect} from 'react-redux';

import {fetchWords} from '../reducers/wordsReducer';
import {Word} from './Word';


class WordsList extends React.Component {
  componentDidMount() {
    this.props.fetchWords();
  }

  render() {
    return (
      <ul>
        {this.props.words.data.map(w => (<Word key={w.word} {...w} />))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
    recorder: state.recorder,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: () => dispatch(fetchWords()),
  };
}

WordsList = connect(mapStateToProps, mapDispatchToProps)(WordsList);

export {
  WordsList,
};
