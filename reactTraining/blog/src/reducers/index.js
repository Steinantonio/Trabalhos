import {combineReducers} from "redux";
import postReducer from './postsReducer';
import userReducer from './userReducer';
export default combineReducers({
    posts : postReducer, // dummy reducer so error dont happen
    users : userReducer
});