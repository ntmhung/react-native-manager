/**
 * Created by minhhung on 6/23/18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import Communications from "react-native-communications";
import _ from "lodash";
import EmployeeForm from "./EmployeeForm";
import {employeeUpdate, employeeSave, employeeDelete} from "../actions";
import {Card, CardSection, Button, Confirm} from "./common";

class EmployeeEdit extends Component {
    state = {showModal: false};

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

    onEditPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({showModal: !this.state.showModal});
    }

    onAccept() {
        const {uid} = this.props.employee.uid;
        this.props.employeeDelete({uid})
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onEditPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>Fire</Button>
                </CardSection>

                <Confirm visible={this.state.showModal}
                         onAccept={this.onAccept}
                         onDecline={this.onDecline}
                >
                    Are you sure to fire this employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);