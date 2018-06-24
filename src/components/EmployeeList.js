/**
 * Created by minhhung on 6/12/18.
 */
import React, {Component} from "react";
import {ListView} from "react-native";
import {connect} from "react-redux";
import {employeesFetch} from "../actions";
import EmployeeListItem from "./EmployeeListItem";
import _ from "lodash";

class EmployeeList extends Component {
    /**
     * Create datasource here to get the employees list whenever navigating back to this screen, because when going to
     * this screen first time, the datasource was stored in global state property. So when we come back,
     * we already have the datasource of employees
     */
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props)
    }

    /**
     * This function ensure that when we receive the data from Firebase and the state is updated (as on('value', ...)
     * event of Firebase is triggered in action creator), the datasource will be re-created
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        /*
         * nextProps are the next set of props that this component will be rendered with.
         * this.props is still the old set of props in this lifecycle function
         */

        this.createDataSource(nextProps)

    }

    createDataSource({employees}) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = dataSource.cloneWithRows(employees);
    }

    renderRow(employee) {
        return (
            <EmployeeListItem employee={employee}/>
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    /**
     * convert employee list object to array
     * @return array [{ shift: 'Monday', phone: '555-5555', name: 'Hung', id: uid}]
     */
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
