/**
 * Created by minhhung on 6/23/18.
 */
import React, {Component} from "react";
import _ from "lodash";
import {Card, CardSection, Button} from "./common";
import EmployeeForm from "./EmployeeForm";
import {connect} from "react-redux";
import {employeeUpdate, employeeSave} from "../actions";


class EmployeeEdit extends Component {
    componentWillMount() {
        /*
         * call employeeUpdate action creator to bind new value to EmployeeFormReducer in order to get the original
         * data of selected employee, preventing from get the updated data when user change the input but not save then
         * return to employee list scene
         */
        _.each(this.props.employee, (value, key) => {
            this.props.employeeUpdate({key, value});
        })
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Edit</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);