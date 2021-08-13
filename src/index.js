import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const userReducer = (state={}, action) => {
  switch(action.type){
    default:
      return state
    }
  }

const charactersReducer = (state=[], action) => {
  switch(action.type){
    case 'SET_CHARACTERS':
      return action.payload
    case 'ADD_CHARACTER':
      return [...state, action.character]
    default:
      return state
  }
}

// combineReducers
const reducer = combineReducers({
  user: userReducer,
  characters: charactersReducer
})
  
// Store takes in a reducer (i.e. const store = createStore(() => {}))
const store = createStore(reducer)
  
// console.log(store) 
// console.log(store.getState())

// const action = {type: 'GET_CHARACTERS', payload: {}}
// const action = {type: 'GET_CHARACTERS', character: {}}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
