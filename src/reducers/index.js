/**
 * Created by minhhung on 6/8/18.
 */
import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});