/**
 * Created by minhhung on 6/12/18.
 */
import React from "react";
import {Scene, Router, Actions} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmplyeeCreate from "./components/EmployeeCreate";
import {iconAdd} from "./components/icons";

const RouterComponent = () => {

    /*
     * - Order of scene can be set in two ways:
     *      + Use initial attribute
     *      + Move Scene appear first above
     */
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                    />
                </Scene>
                <Scene key="main" initial>
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees List"
                        rightTitle={iconAdd}
                        onRight={() => Actions.employeeCreate()}
                        rightButtonStyle={styles.rightButtonStyle}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmplyeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    rightButtonStyle: {
    }
};

export default RouterComponent;