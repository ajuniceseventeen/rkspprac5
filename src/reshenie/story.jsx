import { createStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form';

// const reducers = {
//     // ... your other reducers here ...
//     form: formReducer
//   };
//   const reducer = combineReducers(reducers);
//   const store = createStore(reducer);

const reducer = combineReducers({
  form: formReducer
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

export default store