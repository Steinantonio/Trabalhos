import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SINGLE':
            return {...state, [action.payload.id]: action.payload};
            
        case 'FETCH_STREAMS':
            return {...state, ..._.mapKeys(action.payload, 'id')};
            
        case 'CREATE_STREAM':
            return {...state, [action.payload.id]: action.payload};
        
        case 'EDIT_STREAM':
            return {...state, [action.payload.id]: action.payload};
            //[action.payload.id] this is a dynamic key, its only creating an key for action.paylod, just like if i hardcoded it
        default:
            return state;
    };
};