/**
 * Created by minhhung on 6/8/18.
 */
import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});