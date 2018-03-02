import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Game from './components/game';
import store from './store';
import {restartGame, addGuess} from './actions';

import './reset.css';
import './index.css';

console.log(store.getState());
store.dispatch(addGuess(30));
console.log(store.getState());
store.dispatch(restartGame(66));
console.log(store.getState());

// ReactDOM.render(
//   <Provider store={store}>
//   <Game/>
//   </ Provider>,
//   document.getElementById('root')
// );
