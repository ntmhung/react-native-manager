/**
 * Created by minhhung on 6/13/18.
 */
import React, {Component} from "react";
import {Card, CardSection, Input, Button} from "./common";
import {connect} from "react-redux";
import {employeeUpdate} from "../actions";

class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="employee name"
                        value={this.props.name}
                        onChange={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="555-5555"
                        value={this.props.phone}
                        onChange={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);