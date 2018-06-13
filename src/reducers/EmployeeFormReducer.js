/**
 * Created by minhhung on 6/13/18.
 */
import {EMPLOYEE_ACTIONS} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_ACTIONS:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};