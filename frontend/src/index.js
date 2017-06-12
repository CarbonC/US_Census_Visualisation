import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";
import app from "./reducers";
import {loadVariables, loadValues} from "./actions";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
 We use redux-thunk to be able to dispatch asynchronous actions
 */
const store = createStore(
    app,
    applyMiddleware(thunk)
);

const rootEl = document.getElementById("root");

const render = () => ReactDOM.render(
    <MuiThemeProvider>
        <App
            datas={store.getState()}
            changeVariables={(variable) => store.dispatch({type: "CHANGEVARIABLE", selected: variable})}
            loadVariables={() => store.dispatch(loadVariables())}
            loadValues={() => store.dispatch(loadValues())}
        />
    </MuiThemeProvider>
    ,
    rootEl,
);

render();
store.subscribe(render);
