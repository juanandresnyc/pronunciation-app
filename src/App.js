import React from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import {WordForm} from './components/WordForm';
import {WordsList} from './components/WordsList';
import {Recorder} from './components/Recorder';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App columns is-mobile is-centered">
          <div className="column is-half-tablet is-one-third-desktop">
            <Recorder />
            <WordsList />
            <WordForm />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
