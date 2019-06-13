import streams from '../../apis/streams';
import history from '../../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};


export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};


export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        
        const { user_id } = getState().auth;
        const response = await streams.post('/streams', {...formValues, user_id});
        dispatch({type: 'CREATE_STREAM', payload: response.data});
        history.push('/');
    };
};


export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({type: 'FETCH_STREAMS', payload: response.data});
    };
    
};


export const fetchSingle = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({type: 'FETCH_SINGLE', payload: response.data});
        
    };
};

export const updateStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({type: 'EDIT_STREAM', payload: response.data})
        history.push('/');
    };
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    
    dispatch({ type: 'DELETE_STREAM', payload: id });
    history.push('/');
};



