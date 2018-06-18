/**
 * Created by minhhung on 6/13/18.
 */
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from "../actions/types";

//Can set default user here
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};

