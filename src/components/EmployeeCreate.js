/**
 * Created by minhhung on 6/13/18.
 */
import React, {Component} from "react";
import {Card, CardSection, Button} from "./common";
import {connect} from "react-redux";
import {employeeUpdate, employeeCreate} from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
    //Can set default value to form with componentWillMount()

    onButtonPress() {
        const {name, phone, shift} = this.props;
        //Set default value of shift to Monday
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);