/**
 * Created by minhhung on 6/13/18.
 */
import {EMPLOYEE_ACTIONS} from "./types";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_ACTIONS,
        payload: {prop, value}
    }
};