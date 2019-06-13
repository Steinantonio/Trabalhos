import {combineReducers} from "redux/es/redux";
import authReducer from './authReducer';
import {reducer as formReducer } from "redux-form";
import streamReducer from './streamsReducer';

export default combineReducers({
    auth : authReducer,
    form: formReducer,
    streams:streamReducer
    
});