/**
 * Created by minhhung on 6/12/18.
 */
import React from "react";
import {Scene, Router} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
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
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees List"
                        rightTitle="Add"
                        onRight={() => console.log("right!!!")}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;