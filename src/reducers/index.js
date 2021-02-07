import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,             // counterReducer: counterReducer
    isLogged: loggedReducer     // We can even use 'loggedReducer' as well (i.e:- loggedReducer: loggedReducer)
});

export default allReducers;

