import React, {Component} from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import AutoComplete from "material-ui/AutoComplete";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import styled from "styled-components";


const Row = styled.div`
	display: inline-flex;
	padding: 20px;
`;

const VariableField = styled.div`
	padding-left: 20px;
`;

const Comment = styled.p`
	padding-left: 20px;
`;


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
                <AppBar
                    iconElementLeft={<div/>}
                    title="US Census Visualization"
                />
                <Row>
                    <p>
                        Variable:
                    </p>
                    <VariableField>
                        <AutoComplete
                            fullWidth={true}
                            hintText="Variable name"
                            dataSource={this.props.datas.variables}
                            onNewRequest={this.handleUpdateInput}
                        />
                    </VariableField>
                    <Comment>
                        {this.props.datas.rowsNumber > 100 ? `Non displayed rows: ${this.props.datas.rowsNumber - 100}` : null}
                    </Comment>
                </Row>
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
