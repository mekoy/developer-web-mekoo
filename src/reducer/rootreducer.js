/*
 src/reducers/rootReducer.js
*/

import { combineReducers } from 'redux';
import homeReducer from './homeReducer/homeReducer';
import rootReducerSearch from './searchReducer/searchReducer';
export default combineReducers({
    homeReducer,
    rootReducerSearch
});