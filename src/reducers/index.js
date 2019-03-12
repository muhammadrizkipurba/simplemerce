import {combineReducers} from 'redux'

const init = {
    id : '',
    username: '',
    error: ''
}

const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, id: action.payload.id, username: action.payload.username}
        
        case 'AUTH_ERROR' :
            return {...state, error: action.payload}
            
    
        default:
            return state
    }
}

export default combineReducers(
    {
        auth: AuthReducer
    }
)