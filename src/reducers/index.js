/**
 * Created by minhhung on 6/8/18.
 */
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
   auth: AuthReducer
});