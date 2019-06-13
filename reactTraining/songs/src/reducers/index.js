import actions from '../actions';
import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: "Come as you are", duration : '3:25'}
    
    ];
};


const selectedSong = (songSelected = null , action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    
    return songSelected;
};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSong
    
});