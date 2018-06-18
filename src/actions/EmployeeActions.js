/**
 * Created by minhhung on 6/13/18.
 */
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS} from "./types";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    // "/users/userId/employees" is path to JSON data stored
    // We return a pseudo action here to satisfy the rule of redux-thunk
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            //type: reset object prevent navigating back from one page to the page before
            .then(
                () => {
                    dispatch({type: EMPLOYEE_CREATE});
                    Actions.employeeList({type: 'reset'})
                }
            );
    }
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        /*
         * the 'value' event handler will watch for the data come across the ref() above. So we only need to call the
         * employeesFetch action creator one time, and firebase will watch for the data changes to the ref() and call the
         * snapshot function. Ex: when create new employee and push the data to the ref, thi snapshot function will be call
         */
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            })
    }
};