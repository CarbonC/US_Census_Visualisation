import React, {Component} from "react";
import PropTypes from "prop-types";
import AutoComplete from "material-ui/AutoComplete";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";

class App extends Component {

    static propTypes = {
        datas: PropTypes.object.isRequired,
        loadValues: PropTypes.func.isRequired,
        loadVariables: PropTypes.func.isRequired,
        changeVariables: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.loadVariables();
    };

    handleUpdateInput = (value) => {
        this.props.changeVariables(value);
        this.props.loadValues();
    };

    render() {
        return (
            <div>
                <div>
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.props.datas.variables}
                        onNewRequest={this.handleUpdateInput}
                    />

                </div>
                <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                            <TableHeaderColumn>Count</TableHeaderColumn>
                            <TableHeaderColumn>Average Age</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.datas.values.map((res) => {
                            return (
                                <TableRow key={res[this.props.datas.selected]}>
                                    <TableRowColumn>{res[this.props.datas.selected]}</TableRowColumn>
                                    <TableRowColumn>{res.count}</TableRowColumn>
                                    <TableRowColumn>{res.age}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }
}

export default App;
