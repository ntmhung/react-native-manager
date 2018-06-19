/**
 * Created by minhhung on 6/12/18.
 */
import React, {Component} from "react";
import {ListView, EmployeeListItem} from "react-native";
import {connect} from "react-redux";
import {employeesFetch} from "../actions";
import _ from "lodash";

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props)
    }

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
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return _.map(state.employees, (val, uid) => {
        return {...val, uid}; //{ shift: 'Monday', phone: '555-5555', name: 'Hung', id: uid}
    });
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
