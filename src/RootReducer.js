import { combineReducers } from 'redux';
import HelloWorldReducer from './features/HelloWorld/reducer';

export default combineReducers({
  helloWorld: HelloWorldReducer,
});