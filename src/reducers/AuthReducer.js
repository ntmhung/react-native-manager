/**
 * Created by minhhung on 6/9/18.
 */
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from "../actions/types";

const INITIAL_STATE = {email: '', password: '', user: null, error: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            /* Kind of similar to $.extend. We get all of states out, including email state, then override the
             * email state with the new email. This is how Javascript object works.
             * Example:
             * object = {
             *      ...
             *      email: 'old@email.com',
             *      ...
             *      email: 'new@email.com' => this will replace email: 'old@email.com'
             * }
             *
             * We create a brand new object here because if we just return, ex: state.email = 'new@email.com', it just
             * change the value that the pointer state point to, then Redux won't understand that we have mutated the
             * state. To example, we have state = {} then newState = state, this means the newState is also pointing to
             * the value that pointer state point to. Then if we do something like newState = {color: 'red'}, the state
             * pointer will be also state = {color: 'red'}. When Redux call combineReducers, the newState is equal to state
             * therefore, Redux won't update the application state object and components will not be re-rendered.
             */
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication failed', password: '', loading: false};
        default:
            return state;
    }
};