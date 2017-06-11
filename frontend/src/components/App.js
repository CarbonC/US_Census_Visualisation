import React, {Component} from "react";
import PropTypes from "prop-types";

class App extends Component {

    static propTypes = {
        datas: PropTypes.object.isRequired,
        loadValues: PropTypes.func.isRequired,
        loadVariables: PropTypes.func.isRequired,
        changeVariables: PropTypes.func.isRequired,
    };

    componentWillMount(){
        this.props.loadVariables();
    }
    render() {
        const { datas } = this.props;
        return (
            <div>
                Hello World
            </div>
        )
    }
}

export default App;
