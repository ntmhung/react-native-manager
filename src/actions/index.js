/**
 * Created by minhhung on 6/9/18.
 */
import firebase from "firebase";
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from "./types";

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (password) => {
    //get passed to dispatch()
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

/*
 * Asynchronous action creator. Only dispatch actions to reducer when something done, such as AJAX call.
 * Use redux-thunk
 */
export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
};