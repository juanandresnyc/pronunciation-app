import React from 'react';
import {connect} from 'react-redux';

import {addWord} from '../reducers/wordsReducer';

import './WordForm.css';


class WordForm extends React.Component {
  state = {
    'wordInput': '',
  }
  onClick = () => {
    this.props.addWord(this.state.wordInput);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <div className="level-item field has-addons">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              name="wordInput"
              onChange={this.onChange}
              value={this.state.wordInput}
            />
          </div>
          <div className="control">
            <button className="button is-large" onClick={this.onClick}>
              add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: data => dispatch(addWord(data))
  };
}

WordForm = connect(null, mapDispatchToProps)(WordForm);

export {
  WordForm,
};
